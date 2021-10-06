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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Enterprise: crudResolvers.EnterpriseCrudResolver
};
const actionResolversMap = {
    Enterprise: {
        enterprise: actionResolvers.FindUniqueEnterpriseResolver,
        findFirstEnterprise: actionResolvers.FindFirstEnterpriseResolver,
        enterprises: actionResolvers.FindManyEnterpriseResolver,
        createEnterprise: actionResolvers.CreateEnterpriseResolver,
        createManyEnterprise: actionResolvers.CreateManyEnterpriseResolver,
        deleteEnterprise: actionResolvers.DeleteEnterpriseResolver,
        updateEnterprise: actionResolvers.UpdateEnterpriseResolver,
        deleteManyEnterprise: actionResolvers.DeleteManyEnterpriseResolver,
        updateManyEnterprise: actionResolvers.UpdateManyEnterpriseResolver,
        upsertEnterprise: actionResolvers.UpsertEnterpriseResolver,
        aggregateEnterprise: actionResolvers.AggregateEnterpriseResolver,
        groupByEnterprise: actionResolvers.GroupByEnterpriseResolver
    }
};
const crudResolversInfo = {
    Enterprise: ["enterprise", "findFirstEnterprise", "enterprises", "createEnterprise", "createManyEnterprise", "deleteEnterprise", "updateEnterprise", "deleteManyEnterprise", "updateManyEnterprise", "upsertEnterprise", "aggregateEnterprise", "groupByEnterprise"]
};
const argsInfo = {
    FindUniqueEnterpriseArgs: ["where"],
    FindFirstEnterpriseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyEnterpriseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateEnterpriseArgs: ["data"],
    CreateManyEnterpriseArgs: ["data", "skipDuplicates"],
    DeleteEnterpriseArgs: ["where"],
    UpdateEnterpriseArgs: ["data", "where"],
    DeleteManyEnterpriseArgs: ["where"],
    UpdateManyEnterpriseArgs: ["data", "where"],
    UpsertEnterpriseArgs: ["where", "create", "update"],
    AggregateEnterpriseArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByEnterpriseArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                for (const allActionsDecorator of allActionsDecorators) {
                    allActionsDecorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                    allActionsDecorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
                }
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, resolverActionName, Object.getOwnPropertyDescriptor(crudTarget, resolverActionName));
                decorator(actionTarget, resolverActionName, Object.getOwnPropertyDescriptor(actionTarget, resolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                for (const allFieldsDecorator of allFieldsDecorators) {
                    allFieldsDecorator(typePrototype, typeFieldName);
                }
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            for (const fieldDecorator of fieldDecorators) {
                fieldDecorator(typePrototype, typeFieldName);
            }
        }
    }
}
const modelsInfo = {
    Enterprise: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateEnterprise: ["_count", "_avg", "_sum", "_min", "_max"],
    EnterpriseGroupBy: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    EnterpriseCountAggregate: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt", "_all"],
    EnterpriseAvgAggregate: ["numEmpleados"],
    EnterpriseSumAggregate: ["numEmpleados"],
    EnterpriseMinAggregate: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseMaxAggregate: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    EnterpriseWhereInput: ["AND", "OR", "NOT", "id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseOrderByWithRelationInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseWhereUniqueInput: ["id", "identificacion"],
    EnterpriseOrderByWithAggregationInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
    EnterpriseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseCreateInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseUpdateInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseCreateManyInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseUpdateManyMutationInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnterpriseCountOrderByAggregateInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseAvgOrderByAggregateInput: ["numEmpleados"],
    EnterpriseMaxOrderByAggregateInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseMinOrderByAggregateInput: ["id", "nombre", "isApproved", "razonSocial", "nit", "identificacion", "numEmpleados", "logo", "createdAt", "updatedAt"],
    EnterpriseSumOrderByAggregateInput: ["numEmpleados"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
