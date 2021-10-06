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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const graphql_fields_1 = __importDefault(require("graphql-fields"));
const AggregateEnterpriseArgs_1 = require("./args/AggregateEnterpriseArgs");
const CreateEnterpriseArgs_1 = require("./args/CreateEnterpriseArgs");
const CreateManyEnterpriseArgs_1 = require("./args/CreateManyEnterpriseArgs");
const DeleteEnterpriseArgs_1 = require("./args/DeleteEnterpriseArgs");
const DeleteManyEnterpriseArgs_1 = require("./args/DeleteManyEnterpriseArgs");
const FindFirstEnterpriseArgs_1 = require("./args/FindFirstEnterpriseArgs");
const FindManyEnterpriseArgs_1 = require("./args/FindManyEnterpriseArgs");
const FindUniqueEnterpriseArgs_1 = require("./args/FindUniqueEnterpriseArgs");
const GroupByEnterpriseArgs_1 = require("./args/GroupByEnterpriseArgs");
const UpdateEnterpriseArgs_1 = require("./args/UpdateEnterpriseArgs");
const UpdateManyEnterpriseArgs_1 = require("./args/UpdateManyEnterpriseArgs");
const UpsertEnterpriseArgs_1 = require("./args/UpsertEnterpriseArgs");
const helpers_1 = require("../../../helpers");
const Enterprise_1 = require("../../../models/Enterprise");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEnterprise_1 = require("../../outputs/AggregateEnterprise");
const EnterpriseGroupBy_1 = require("../../outputs/EnterpriseGroupBy");
let EnterpriseCrudResolver = class EnterpriseCrudResolver {
    async enterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async enterprises(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEnterprise(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEnterprise(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEnterprise(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).enterprise.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Enterprise_1.Enterprise, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueEnterpriseArgs_1.FindUniqueEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "enterprise", null);
__decorate([
    TypeGraphQL.Query(_returns => Enterprise_1.Enterprise, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstEnterpriseArgs_1.FindFirstEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "findFirstEnterprise", null);
__decorate([
    TypeGraphQL.Query(_returns => [Enterprise_1.Enterprise], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyEnterpriseArgs_1.FindManyEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "enterprises", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Enterprise_1.Enterprise, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateEnterpriseArgs_1.CreateEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "createEnterprise", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyEnterpriseArgs_1.CreateManyEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "createManyEnterprise", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Enterprise_1.Enterprise, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteEnterpriseArgs_1.DeleteEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "deleteEnterprise", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Enterprise_1.Enterprise, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateEnterpriseArgs_1.UpdateEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "updateEnterprise", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyEnterpriseArgs_1.DeleteManyEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "deleteManyEnterprise", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyEnterpriseArgs_1.UpdateManyEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "updateManyEnterprise", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Enterprise_1.Enterprise, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertEnterpriseArgs_1.UpsertEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "upsertEnterprise", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateEnterprise_1.AggregateEnterprise, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateEnterpriseArgs_1.AggregateEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "aggregateEnterprise", null);
__decorate([
    TypeGraphQL.Query(_returns => [EnterpriseGroupBy_1.EnterpriseGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByEnterpriseArgs_1.GroupByEnterpriseArgs]),
    __metadata("design:returntype", Promise)
], EnterpriseCrudResolver.prototype, "groupByEnterprise", null);
EnterpriseCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Enterprise_1.Enterprise)
], EnterpriseCrudResolver);
exports.EnterpriseCrudResolver = EnterpriseCrudResolver;
