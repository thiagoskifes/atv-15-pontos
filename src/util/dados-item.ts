import * as fs from 'fs';
import { Item } from '../item/item.model';

export class DadosItem {
  private static readonly caminho = './dados/itens.json';

  static loadItens(): Item[] {
    try {
      const dados = fs.readFileSync(this.caminho, 'utf8');
      return JSON.parse(dados);
    } catch (err) {
      console.error(`Erro ao ler o arquivo ${this.caminho}:`, err);
      return [];
    }
  }

  static saveItens(itens: Item[]): void {
    try {
      fs.writeFileSync(this.caminho, JSON.stringify(itens, null, 2));
    } catch (err) {
      console.error(`Erro ao salvar o arquivo ${this.caminho}:`, err);
    }
  }
}
