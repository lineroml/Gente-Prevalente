import { GraphQLResolveInfo } from "graphql";
import { FindManyEnterpriseArgs } from "./args/FindManyEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class FindManyEnterpriseResolver {
    enterprises(ctx: any, info: GraphQLResolveInfo, args: FindManyEnterpriseArgs): Promise<Enterprise[]>;
}
