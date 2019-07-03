import { commudityDiscription } from './CommudityDiscription.model';

export interface Commudity {
    id: number;
    product_name: string;
    catAndDiscription: commudityDiscription[];
    created_by: number;
    created_on: string;
    updated_by: number;
    updated_on: string;
}