"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EnterpriseAvgOrderByAggregateInput_1 = require("../inputs/EnterpriseAvgOrderByAggregateInput");
const EnterpriseCountOrderByAggregateInput_1 = require("../inputs/EnterpriseCountOrderByAggregateInput");
const EnterpriseMaxOrderByAggregateInput_1 = require("../inputs/EnterpriseMaxOrderByAggregateInput");
const EnterpriseMinOrderByAggregateInput_1 = require("../inputs/EnterpriseMinOrderByAggregateInput");
const EnterpriseSumOrderByAggregateInput_1 = require("../inputs/EnterpriseSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EnterpriseOrderByWithAggregationInput = class EnterpriseOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "nombre", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "isApproved", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "razonSocial", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "nit", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "identificacion", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "numEmpleados", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "logo", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], EnterpriseOrderByWithAggregationInput.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseCountOrderByAggregateInput_1.EnterpriseCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseCountOrderByAggregateInput_1.EnterpriseCountOrderByAggregateInput)
], EnterpriseOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseAvgOrderByAggregateInput_1.EnterpriseAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseAvgOrderByAggregateInput_1.EnterpriseAvgOrderByAggregateInput)
], EnterpriseOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseMaxOrderByAggregateInput_1.EnterpriseMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseMaxOrderByAggregateInput_1.EnterpriseMaxOrderByAggregateInput)
], EnterpriseOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseMinOrderByAggregateInput_1.EnterpriseMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseMinOrderByAggregateInput_1.EnterpriseMinOrderByAggregateInput)
], EnterpriseOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseSumOrderByAggregateInput_1.EnterpriseSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseSumOrderByAggregateInput_1.EnterpriseSumOrderByAggregateInput)
], EnterpriseOrderByWithAggregationInput.prototype, "_sum", void 0);
EnterpriseOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], EnterpriseOrderByWithAggregationInput);
exports.EnterpriseOrderByWithAggregationInput = EnterpriseOrderByWithAggregationInput;
