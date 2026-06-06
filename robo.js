// Robo de automacao de e-mail (stub local — funcionalidade completa no Railway)
let _ready = false;
module.exports = {
  init() { _ready = true; },
  ready() { return _ready; },
  async runOnce() { return { ok: true, msg: 'Robo desativado na instalacao local.' }; }
};
