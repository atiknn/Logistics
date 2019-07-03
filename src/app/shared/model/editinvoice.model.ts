import { frieghtCharges } from './frieghtCharges.model';
import { freightAdditional } from './freightAdditional.model';

export interface editinvoice {
    id: number;
    blno: string;
    forword_agent: string;
    notify_agent: string;
    particulars: string;
    receipt_no: string;
    receipt_date: string;
    customer_code: string;
    totalsffc: number;
    totaladlcc: number;
    totalCharges: number;
    cheque: string;
    remarks: string;
    affc: frieghtCharges[];
    adlc: freightAdditional[];
    status: string;
    created_by: number;
    created_on: string;
    updated_by: number;
    updated_on: string;
}