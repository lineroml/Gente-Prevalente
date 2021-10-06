import { EnterpriseAvgAggregate } from "../outputs/EnterpriseAvgAggregate";
import { EnterpriseCountAggregate } from "../outputs/EnterpriseCountAggregate";
import { EnterpriseMaxAggregate } from "../outputs/EnterpriseMaxAggregate";
import { EnterpriseMinAggregate } from "../outputs/EnterpriseMinAggregate";
import { EnterpriseSumAggregate } from "../outputs/EnterpriseSumAggregate";
export declare class AggregateEnterprise {
    _count: EnterpriseCountAggregate | null;
    _avg: EnterpriseAvgAggregate | null;
    _sum: EnterpriseSumAggregate | null;
    _min: EnterpriseMinAggregate | null;
    _max: EnterpriseMaxAggregate | null;
}
