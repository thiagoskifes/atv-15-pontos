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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const common_1 = require("@nestjs/common");
const item_model_1 = require("./item.model");
const item_service_1 = require("./item.service");
let ItemController = class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    findAll() {
        return this.itemService.findAll();
    }
    findOne(COD) {
        return this.itemService.findOne(COD);
    }
    create(itemData) {
        return this.itemService.create(itemData);
    }
    update(COD, itemData) {
        return this.itemService.update(COD, itemData);
    }
    delete(COD) {
        return this.itemService.delete(COD);
    }
};
exports.ItemController = ItemController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ItemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':COD'),
    __param(0, (0, common_1.Param)('COD')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", item_model_1.Item)
], ItemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [item_model_1.Item]),
    __metadata("design:returntype", item_model_1.Item)
], ItemController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':COD'),
    __param(0, (0, common_1.Param)('COD')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, item_model_1.Item]),
    __metadata("design:returntype", item_model_1.Item)
], ItemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':COD'),
    __param(0, (0, common_1.Param)('COD')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", item_model_1.Item)
], ItemController.prototype, "delete", null);
exports.ItemController = ItemController = __decorate([
    (0, common_1.Controller)('itens'),
    __metadata("design:paramtypes", [item_service_1.ItemService])
], ItemController);
//# sourceMappingURL=item.controller.js.map