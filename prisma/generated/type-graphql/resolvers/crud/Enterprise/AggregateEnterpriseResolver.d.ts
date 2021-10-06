import { GraphQLResolveInfo } from "graphql";
import { AggregateEnterpriseArgs } from "./args/AggregateEnterpriseArgs";
import { AggregateEnterprise } from "../../outputs/AggregateEnterprise";
export declare class AggregateEnterpriseResolver {
    aggregateEnterprise(ctx: any, info: GraphQLResolveInfo, args: AggregateEnterpriseArgs): Promise<AggregateEnterprise>;
}
