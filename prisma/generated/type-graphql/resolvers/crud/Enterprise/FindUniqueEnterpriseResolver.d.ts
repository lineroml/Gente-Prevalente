import { GraphQLResolveInfo } from "graphql";
import { FindUniqueEnterpriseArgs } from "./args/FindUniqueEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class FindUniqueEnterpriseResolver {
    enterprise(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEnterpriseArgs): Promise<Enterprise | null>;
}
