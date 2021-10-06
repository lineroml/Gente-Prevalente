import { EnterpriseAvgAggregate } from "../outputs/EnterpriseAvgAggregate";
import { EnterpriseCountAggregate } from "../outputs/EnterpriseCountAggregate";
import { EnterpriseMaxAggregate } from "../outputs/EnterpriseMaxAggregate";
import { EnterpriseMinAggregate } from "../outputs/EnterpriseMinAggregate";
import { EnterpriseSumAggregate } from "../outputs/EnterpriseSumAggregate";
export declare class EnterpriseGroupBy {
    id: string;
    nombre: string;
    isApproved: boolean;
    razonSocial: string;
    nit: string;
    identificacion: string;
    numEmpleados: number;
    logo: string;
    createdAt: Date;
    updatedAt: Date;
    _count: EnterpriseCountAggregate | null;
    _avg: EnterpriseAvgAggregate | null;
    _sum: EnterpriseSumAggregate | null;
    _min: EnterpriseMinAggregate | null;
    _max: EnterpriseMaxAggregate | null;
}
