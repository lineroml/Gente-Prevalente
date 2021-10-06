import { GraphQLResolveInfo } from "graphql";
import { UpsertEnterpriseArgs } from "./args/UpsertEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class UpsertEnterpriseResolver {
    upsertEnterprise(ctx: any, info: GraphQLResolveInfo, args: UpsertEnterpriseArgs): Promise<Enterprise>;
}
