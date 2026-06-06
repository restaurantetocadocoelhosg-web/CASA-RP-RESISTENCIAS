// Gera icones PNG para o PWA (icon-192.png e icon-180.png)
// Usa apenas modulos built-in do Node.js (zlib)
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// CRC32 lookup table
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[i] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (const b of buf) c = crcTable[(c ^ b) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const tb = Buffer.from(type);
  const crcBuf = Buffer.alloc(4); crcBuf.writeUInt32BE(crc32(Buffer.concat([tb, data])));
  return Buffer.concat([len, tb, data, crcBuf]);
}

// Bitmap "RP" — 5x7 pixels per char, escala 8x
// R:
const charR = [
  [1,1,1,1,0],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,1,1,1,0],
  [1,0,1,0,0],
  [1,0,0,1,0],
  [1,0,0,0,1],
];
// P:
const charP = [
  [1,1,1,1,0],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,1,1,1,0],
  [1,0,0,0,0],
  [1,0,0,0,0],
  [1,0,0,0,0],
];

function drawIcon(size) {
  const [R,G,B] = [92, 64, 51];   // #5C4033 fundo marrom
  const [Fr,Fg,Fb] = [253,246,227]; // #FDF6E3 texto creme

  // Pixels RGBA
  const px = new Uint8Array(size * size * 4);
  // Preenche fundo
  for (let i = 0; i < size * size; i++) {
    px[i*4]=R; px[i*4+1]=G; px[i*4+2]=B; px[i*4+3]=255;
  }

  // Circulo de borda
  const cx = size/2, cy = size/2;
  const rad = size*0.44, thick = size*0.04;
  for (let y=0; y<size; y++) {
    for (let x=0; x<size; x++) {
      const d = Math.sqrt((x-cx)**2+(y-cy)**2);
      if (d >= rad-thick && d <= rad+thick) {
        const i = (y*size+x)*4;
        px[i]=Fr; px[i+1]=Fg; px[i+2]=Fb; px[i+3]=255;
      }
    }
  }

  // Desenha "RP" centralizado
  const scale = Math.floor(size * 0.065);
  const charW = 5 * scale, charH = 7 * scale, gap = Math.max(1, Math.floor(scale*1.5));
  const totalW = charW*2 + gap;
  const startX = Math.floor((size - totalW)/2);
  const startY = Math.floor((size - charH)/2) - Math.floor(size*0.02);

  for (const [char, ox] of [[charR, 0], [charP, charW+gap]]) {
    for (let row=0; row<7; row++) {
      for (let col=0; col<5; col++) {
        if (!char[row][col]) continue;
        for (let dy=0; dy<scale; dy++) {
          for (let dx=0; dx<scale; dx++) {
            const px_x = startX + ox + col*scale + dx;
            const px_y = startY + row*scale + dy;
            if (px_x<0||px_y<0||px_x>=size||px_y>=size) continue;
            const i = (px_y*size+px_x)*4;
            px[i]=Fr; px[i+1]=Fg; px[i+2]=Fb; px[i+3]=255;
          }
        }
      }
    }
  }

  // Monta raw PNG data (RGB sem alpha para menor tamanho)
  const rowBytes = size*3+1;
  const raw = Buffer.alloc(rowBytes*size);
  for (let y=0; y<size; y++) {
    raw[y*rowBytes]=0; // filter None
    for (let x=0; x<size; x++) {
      raw[y*rowBytes+1+x*3] = px[(y*size+x)*4];
      raw[y*rowBytes+1+x*3+1] = px[(y*size+x)*4+1];
      raw[y*rowBytes+1+x*3+2] = px[(y*size+x)*4+2];
    }
  }
  const compressed = zlib.deflateSync(raw, { level: 9 });

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size,0); ihdr.writeUInt32BE(size,4);
  ihdr[8]=8; ihdr[9]=2; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;

  return Buffer.concat([
    Buffer.from([137,80,78,71,13,10,26,10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', compressed),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

const dir = path.join(__dirname, 'icons');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
fs.writeFileSync(path.join(dir,'icon-192.png'), drawIcon(192));
fs.writeFileSync(path.join(dir,'icon-180.png'), drawIcon(180));
fs.writeFileSync(path.join(dir,'icon-32.png'),  drawIcon(32));
console.log('Icones gerados em icons/icon-192.png, icon-180.png, icon-32.png');
