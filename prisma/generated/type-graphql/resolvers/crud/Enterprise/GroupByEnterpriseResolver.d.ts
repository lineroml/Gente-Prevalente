import { GraphQLResolveInfo } from "graphql";
import { GroupByEnterpriseArgs } from "./args/GroupByEnterpriseArgs";
import { EnterpriseGroupBy } from "../../outputs/EnterpriseGroupBy";
export declare class GroupByEnterpriseResolver {
    groupByEnterprise(ctx: any, info: GraphQLResolveInfo, args: GroupByEnterpriseArgs): Promise<EnterpriseGroupBy[]>;
}
