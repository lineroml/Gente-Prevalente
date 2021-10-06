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
exports.FindManyEnterpriseArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EnterpriseOrderByWithRelationInput_1 = require("../../../inputs/EnterpriseOrderByWithRelationInput");
const EnterpriseWhereInput_1 = require("../../../inputs/EnterpriseWhereInput");
const EnterpriseWhereUniqueInput_1 = require("../../../inputs/EnterpriseWhereUniqueInput");
const EnterpriseScalarFieldEnum_1 = require("../../../../enums/EnterpriseScalarFieldEnum");
let FindManyEnterpriseArgs = class FindManyEnterpriseArgs {
};
__decorate([
    TypeGraphQL.Field(_type => EnterpriseWhereInput_1.EnterpriseWhereInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseWhereInput_1.EnterpriseWhereInput)
], FindManyEnterpriseArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EnterpriseOrderByWithRelationInput_1.EnterpriseOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyEnterpriseArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseWhereUniqueInput_1.EnterpriseWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseWhereUniqueInput_1.EnterpriseWhereUniqueInput)
], FindManyEnterpriseArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyEnterpriseArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyEnterpriseArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [EnterpriseScalarFieldEnum_1.EnterpriseScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyEnterpriseArgs.prototype, "distinct", void 0);
FindManyEnterpriseArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyEnterpriseArgs);
exports.FindManyEnterpriseArgs = FindManyEnterpriseArgs;
