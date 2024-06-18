import { Item } from './item.model';
import { ItemService } from './item.service';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    findAll(): Item[];
    findOne(COD: number): Item;
    create(itemData: Item): Item;
    update(COD: number, itemData: Item): Item;
    delete(COD: number): Item;
}
