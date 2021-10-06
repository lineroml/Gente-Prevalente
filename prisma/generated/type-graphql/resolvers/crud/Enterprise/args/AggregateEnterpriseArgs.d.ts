import { EnterpriseOrderByWithRelationInput } from "../../../inputs/EnterpriseOrderByWithRelationInput";
import { EnterpriseWhereInput } from "../../../inputs/EnterpriseWhereInput";
import { EnterpriseWhereUniqueInput } from "../../../inputs/EnterpriseWhereUniqueInput";
export declare class AggregateEnterpriseArgs {
    where?: EnterpriseWhereInput | undefined;
    orderBy?: EnterpriseOrderByWithRelationInput[] | undefined;
    cursor?: EnterpriseWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
