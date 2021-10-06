import { GraphQLResolveInfo } from "graphql";
import { UpdateEnterpriseArgs } from "./args/UpdateEnterpriseArgs";
import { Enterprise } from "../../../models/Enterprise";
export declare class UpdateEnterpriseResolver {
    updateEnterprise(ctx: any, info: GraphQLResolveInfo, args: UpdateEnterpriseArgs): Promise<Enterprise | null>;
}
