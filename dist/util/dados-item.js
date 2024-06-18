"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosItem = void 0;
const fs = require("fs");
class DadosItem {
    static loadItens() {
        try {
            const dados = fs.readFileSync(this.caminho, 'utf8');
            return JSON.parse(dados);
        }
        catch (err) {
            console.error(`Erro ao ler o arquivo ${this.caminho}:`, err);
            return [];
        }
    }
    static saveItens(itens) {
        try {
            fs.writeFileSync(this.caminho, JSON.stringify(itens, null, 2));
        }
        catch (err) {
            console.error(`Erro ao salvar o arquivo ${this.caminho}:`, err);
        }
    }
}
exports.DadosItem = DadosItem;
DadosItem.caminho = './dados/itens.json';
//# sourceMappingURL=dados-item.js.map