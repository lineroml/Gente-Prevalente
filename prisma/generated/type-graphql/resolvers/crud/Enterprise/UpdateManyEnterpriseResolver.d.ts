import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEnterpriseArgs } from "./args/UpdateManyEnterpriseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEnterpriseResolver {
    updateManyEnterprise(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEnterpriseArgs): Promise<AffectedRowsOutput>;
}
