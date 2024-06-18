import { Item } from '../item/item.model';
export declare class DadosItem {
    private static readonly caminho;
    static loadItens(): Item[];
    static saveItens(itens: Item[]): void;
}
