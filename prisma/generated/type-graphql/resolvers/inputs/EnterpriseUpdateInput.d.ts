import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class EnterpriseUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    isApproved?: BoolFieldUpdateOperationsInput | undefined;
    razonSocial?: StringFieldUpdateOperationsInput | undefined;
    nit?: StringFieldUpdateOperationsInput | undefined;
    identificacion?: StringFieldUpdateOperationsInput | undefined;
    numEmpleados?: IntFieldUpdateOperationsInput | undefined;
    logo?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
