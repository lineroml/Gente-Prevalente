import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class EnterpriseScalarWhereWithAggregatesInput {
    AND?: EnterpriseScalarWhereWithAggregatesInput[] | undefined;
    OR?: EnterpriseScalarWhereWithAggregatesInput[] | undefined;
    NOT?: EnterpriseScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    nombre?: StringWithAggregatesFilter | undefined;
    isApproved?: BoolWithAggregatesFilter | undefined;
    razonSocial?: StringWithAggregatesFilter | undefined;
    nit?: StringWithAggregatesFilter | undefined;
    identificacion?: StringWithAggregatesFilter | undefined;
    numEmpleados?: IntWithAggregatesFilter | undefined;
    logo?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
