import { Item } from './item.model';
export declare class ItemService {
    private itens;
    constructor();
    findAll(): Item[];
    findOne(COD: number): Item;
    create(itemData: Item): Item;
    update(COD: number, itemData: Item): Item;
    delete(COD: number): Item;
}
