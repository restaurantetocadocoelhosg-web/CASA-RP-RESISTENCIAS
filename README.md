# Casa RP Resistências Elétricas — Site Institucional

Site profissional em HTML, CSS e JavaScript para a **Casa RP Resistências Elétricas**.

## Arquivos

| Arquivo | Descrição |
|---|---|
| `index.html` | Página principal com todas as seções |
| `style.css` | Estilos completos (tema escuro industrial) |
| `script.js` | Interatividade: menu, botões flutuantes, formulário |

## Como publicar no GitHub Pages (gratuito)

### 1. Crie ou use um repositório no GitHub
Acesse [github.com](https://github.com) e crie um repositório público chamado `casa-rp-resistencias` (ou qualquer nome).

### 2. Envie os arquivos
Pela interface do GitHub, clique em **"Add file" → "Upload files"** e selecione:
- `index.html`
- `style.css`
- `script.js`

Ou via terminal:
```bash
git add index.html style.css script.js
git commit -m "Site Casa RP Resistências"
git push origin main
```

### 3. Ative o GitHub Pages
1. No repositório, clique em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione `Deploy from a branch`
4. Em **Branch**, selecione `main` e pasta `/ (root)`
5. Clique em **Save**

### 4. Acesse o site
Em alguns minutos, o site estará disponível em:
```
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

---

## Como personalizar

### Alterar número de WhatsApp
No `index.html` e `script.js`, substitua `5521965987979` pelo número desejado (com DDI 55, DDD e número, sem espaços).

### Alterar e-mail
Substitua `casarpresistenciaseletrica@gmail.com` pelo e-mail desejado.

### Adicionar fotos reais dos produtos
No `index.html`, localize cada `<div class="product-img"><span>🔩</span></div>` e substitua por:
```html
<div class="product-img">
  <img src="foto-produto.jpg" alt="Nome do produto" style="width:100%;height:100%;object-fit:cover;">
</div>
```

### Adicionar avaliações reais
Na seção `#avaliacoes`, substitua o texto de placeholder pelo depoimento real do cliente, nome e data.

### Links de redes sociais
Atualize os links no `index.html`:
- Instagram: `https://instagram.com/rp_resistencias`
- Facebook: `https://facebook.com/casarpresistencias` ← atualizar com link real
- Shopee: `https://shopee.com.br/casarp`
- Google: `https://share.google/mSyFVx1wQX8W0FIFe`

---

## Tecnologias utilizadas
- HTML5 semântico + Schema.org para SEO local
- CSS3 com variáveis, Grid, Flexbox e animações
- JavaScript vanilla (sem dependências externas)
- Google Fonts: Barlow Condensed + Inter
