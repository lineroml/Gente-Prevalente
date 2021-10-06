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
exports.EnterpriseGroupBy = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const EnterpriseAvgAggregate_1 = require("../outputs/EnterpriseAvgAggregate");
const EnterpriseCountAggregate_1 = require("../outputs/EnterpriseCountAggregate");
const EnterpriseMaxAggregate_1 = require("../outputs/EnterpriseMaxAggregate");
const EnterpriseMinAggregate_1 = require("../outputs/EnterpriseMinAggregate");
const EnterpriseSumAggregate_1 = require("../outputs/EnterpriseSumAggregate");
let EnterpriseGroupBy = class EnterpriseGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EnterpriseGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EnterpriseGroupBy.prototype, "nombre", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    __metadata("design:type", Boolean)
], EnterpriseGroupBy.prototype, "isApproved", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EnterpriseGroupBy.prototype, "razonSocial", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EnterpriseGroupBy.prototype, "nit", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EnterpriseGroupBy.prototype, "identificacion", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], EnterpriseGroupBy.prototype, "numEmpleados", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], EnterpriseGroupBy.prototype, "logo", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], EnterpriseGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], EnterpriseGroupBy.prototype, "updatedAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseCountAggregate_1.EnterpriseCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseCountAggregate_1.EnterpriseCountAggregate)
], EnterpriseGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseAvgAggregate_1.EnterpriseAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseAvgAggregate_1.EnterpriseAvgAggregate)
], EnterpriseGroupBy.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseSumAggregate_1.EnterpriseSumAggregate, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseSumAggregate_1.EnterpriseSumAggregate)
], EnterpriseGroupBy.prototype, "_sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseMinAggregate_1.EnterpriseMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseMinAggregate_1.EnterpriseMinAggregate)
], EnterpriseGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => EnterpriseMaxAggregate_1.EnterpriseMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", EnterpriseMaxAggregate_1.EnterpriseMaxAggregate)
], EnterpriseGroupBy.prototype, "_max", void 0);
EnterpriseGroupBy = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], EnterpriseGroupBy);
exports.EnterpriseGroupBy = EnterpriseGroupBy;
