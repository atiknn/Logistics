import { ports } from './ports.model';

export interface Vessel_Master {
    id: number;
    name: string;
    nikename: string;
    routess : ports[];
    created_by: number;
    created_on: string;
    updated_by: number;
    updated_on: string;
}