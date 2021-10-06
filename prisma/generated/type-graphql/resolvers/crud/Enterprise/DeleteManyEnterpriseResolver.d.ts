import { GraphQLResolveInfo } from "graphql";
import { DeleteManyEnterpriseArgs } from "./args/DeleteManyEnterpriseArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyEnterpriseResolver {
    deleteManyEnterprise(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEnterpriseArgs): Promise<AffectedRowsOutput>;
}
