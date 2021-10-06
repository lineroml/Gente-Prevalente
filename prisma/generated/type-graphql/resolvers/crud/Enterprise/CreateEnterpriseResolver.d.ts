import { GraphQLResolveInfo } from "graphql";
import { CreateEnterpriseArgs } from "./args/CreateEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class CreateEnterpriseResolver {
    createEnterprise(ctx: any, info: GraphQLResolveInfo, args: CreateEnterpriseArgs): Promise<Enterprise>;
}
