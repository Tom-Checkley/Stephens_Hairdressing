import { Service } from "./service";

export interface PricingGroup {
    name: string;
    services: Service[];
    groupNameEditing?: boolean;
}
