import { EnterpriseOrderByWithAggregationInput } from "../../../inputs/EnterpriseOrderByWithAggregationInput";
import { EnterpriseScalarWhereWithAggregatesInput } from "../../../inputs/EnterpriseScalarWhereWithAggregatesInput";
import { EnterpriseWhereInput } from "../../../inputs/EnterpriseWhereInput";
export declare class GroupByEnterpriseArgs {
    where?: EnterpriseWhereInput | undefined;
    orderBy?: EnterpriseOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "nombre" | "isApproved" | "razonSocial" | "nit" | "identificacion" | "numEmpleados" | "logo" | "createdAt" | "updatedAt">;
    having?: EnterpriseScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
