import { EnterpriseAvgOrderByAggregateInput } from "../inputs/EnterpriseAvgOrderByAggregateInput";
import { EnterpriseCountOrderByAggregateInput } from "../inputs/EnterpriseCountOrderByAggregateInput";
import { EnterpriseMaxOrderByAggregateInput } from "../inputs/EnterpriseMaxOrderByAggregateInput";
import { EnterpriseMinOrderByAggregateInput } from "../inputs/EnterpriseMinOrderByAggregateInput";
import { EnterpriseSumOrderByAggregateInput } from "../inputs/EnterpriseSumOrderByAggregateInput";
export declare class EnterpriseOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    isApproved?: "asc" | "desc" | undefined;
    razonSocial?: "asc" | "desc" | undefined;
    nit?: "asc" | "desc" | undefined;
    identificacion?: "asc" | "desc" | undefined;
    numEmpleados?: "asc" | "desc" | undefined;
    logo?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: EnterpriseCountOrderByAggregateInput | undefined;
    _avg?: EnterpriseAvgOrderByAggregateInput | undefined;
    _max?: EnterpriseMaxOrderByAggregateInput | undefined;
    _min?: EnterpriseMinOrderByAggregateInput | undefined;
    _sum?: EnterpriseSumOrderByAggregateInput | undefined;
}
