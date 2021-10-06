import { GraphQLResolveInfo } from "graphql";
import { CreateManyEnterpriseArgs } from "./args/CreateManyEnterpriseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEnterpriseResolver {
    createManyEnterprise(ctx: any, info: GraphQLResolveInfo, args: CreateManyEnterpriseArgs): Promise<AffectedRowsOutput>;
}
