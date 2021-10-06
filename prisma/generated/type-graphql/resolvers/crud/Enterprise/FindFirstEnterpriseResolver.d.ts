import { GraphQLResolveInfo } from "graphql";
import { FindFirstEnterpriseArgs } from "./args/FindFirstEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class FindFirstEnterpriseResolver {
    findFirstEnterprise(ctx: any, info: GraphQLResolveInfo, args: FindFirstEnterpriseArgs): Promise<Enterprise | null>;
}
