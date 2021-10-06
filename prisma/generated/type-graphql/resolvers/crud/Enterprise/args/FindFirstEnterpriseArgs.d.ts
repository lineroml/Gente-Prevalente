import { EnterpriseOrderByWithRelationInput } from "../../../inputs/EnterpriseOrderByWithRelationInput";
import { EnterpriseWhereInput } from "../../../inputs/EnterpriseWhereInput";
import { EnterpriseWhereUniqueInput } from "../../../inputs/EnterpriseWhereUniqueInput";
export declare class FindFirstEnterpriseArgs {
    where?: EnterpriseWhereInput | undefined;
    orderBy?: EnterpriseOrderByWithRelationInput[] | undefined;
    cursor?: EnterpriseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "nombre" | "isApproved" | "razonSocial" | "nit" | "identificacion" | "numEmpleados" | "logo" | "createdAt" | "updatedAt"> | undefined;
}
