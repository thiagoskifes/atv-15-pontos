import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.model';
import { DadosItem } from '../util/dados-item';

@Injectable()
export class ItemService {
  private itens: Item[] = [];

  constructor() {
    this.itens = DadosItem.loadItens();
  }

  findAll(): Item[] {
    return this.itens;
  }

  findOne(COD: number): Item {
    const item = this.itens.find(item => item.COD === COD);
    if (!item) {
      throw new NotFoundException(`Item com COD ${COD} não encontrado.`);
    }
    return item;
  }

  create(itemData: Item): Item {
    const novoItem = { COD: this.itens.length + 1, ...itemData };
    this.itens.push(novoItem);
    DadosItem.saveItens(this.itens);
    return novoItem;
  }

  update(COD: number, itemData: Item): Item {
    const index = this.itens.findIndex(item => item.COD === COD);
    if (index === -1) {
      throw new NotFoundException(`Item com COD ${COD} não encontrado.`);
    }
    this.itens[index] = { ...this.itens[index], ...itemData };
    DadosItem.saveItens(this.itens);
    return this.itens[index];
  }

  delete(COD: number): Item {
    const index = this.itens.findIndex(item => item.COD === COD);
    if (index === -1) {
      throw new NotFoundException(`Item com COD ${COD} não encontrado.`);
    }
    const deletedItem = this.itens.splice(index, 1)[0];
    DadosItem.saveItens(this.itens);
    return deletedItem;
  }
}
