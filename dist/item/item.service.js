"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const common_1 = require("@nestjs/common");
const dados_item_1 = require("../util/dados-item");
let ItemService = class ItemService {
    constructor() {
        this.itens = [];
        this.itens = dados_item_1.DadosItem.loadItens();
    }
    findAll() {
        return this.itens;
    }
    findOne(COD) {
        const item = this.itens.find(item => item.COD === COD);
        if (!item) {
            throw new common_1.NotFoundException(`Item com COD ${COD} não encontrado.`);
        }
        return item;
    }
    create(itemData) {
        const novoItem = { COD: this.itens.length + 1, ...itemData };
        this.itens.push(novoItem);
        dados_item_1.DadosItem.saveItens(this.itens);
        return novoItem;
    }
    update(COD, itemData) {
        const index = this.itens.findIndex(item => item.COD === COD);
        if (index === -1) {
            throw new common_1.NotFoundException(`Item com COD ${COD} não encontrado.`);
        }
        this.itens[index] = { ...this.itens[index], ...itemData };
        dados_item_1.DadosItem.saveItens(this.itens);
        return this.itens[index];
    }
    delete(COD) {
        const index = this.itens.findIndex(item => item.COD === COD);
        if (index === -1) {
            throw new common_1.NotFoundException(`Item com COD ${COD} não encontrado.`);
        }
        const deletedItem = this.itens.splice(index, 1)[0];
        dados_item_1.DadosItem.saveItens(this.itens);
        return deletedItem;
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ItemService);
//# sourceMappingURL=item.service.js.map