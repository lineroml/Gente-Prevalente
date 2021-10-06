import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class EnterpriseWhereInput {
    AND?: EnterpriseWhereInput[] | undefined;
    OR?: EnterpriseWhereInput[] | undefined;
    NOT?: EnterpriseWhereInput[] | undefined;
    id?: StringFilter | undefined;
    nombre?: StringFilter | undefined;
    isApproved?: BoolFilter | undefined;
    razonSocial?: StringFilter | undefined;
    nit?: StringFilter | undefined;
    identificacion?: StringFilter | undefined;
    numEmpleados?: IntFilter | undefined;
    logo?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
