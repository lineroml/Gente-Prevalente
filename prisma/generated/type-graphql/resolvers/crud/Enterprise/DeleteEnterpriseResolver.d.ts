import { GraphQLResolveInfo } from "graphql";
import { DeleteEnterpriseArgs } from "./args/DeleteEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class DeleteEnterpriseResolver {
    deleteEnterprise(ctx: any, info: GraphQLResolveInfo, args: DeleteEnterpriseArgs): Promise<Enterprise | null>;
}
