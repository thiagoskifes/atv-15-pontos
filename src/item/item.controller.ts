import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Controller('itens')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':COD')
  findOne(@Param('COD') COD: number): Item {
    return this.itemService.findOne(COD);
  }

  @Post()
  create(@Body() itemData: Item): Item {
    return this.itemService.create(itemData);
  }

  @Put(':COD')
  update(@Param('COD') COD: number, @Body() itemData: Item): Item {
    return this.itemService.update(COD, itemData);
  }

  @Delete(':COD')
  delete(@Param('COD') COD: number): Item {
    return this.itemService.delete(COD);
  }
}
