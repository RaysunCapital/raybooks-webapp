import { Identifier, RaRecord } from 'react-admin';

export type ThemeName = 'light' | 'dark';

export interface Product extends RaRecord {
    description: string;
    name: string;
    price: number;
    reference: string;
    stock: number;
}

export interface Customer extends RaRecord {
    first_name: string;
    last_name: string;
    address: string;
    stateAbbr: string;
    city: string;
    zipcode: string;
    avatar: string;
    birthday: string;
    total_spent: number;
    email: string;
}

export type InvoiceStatus = 'unpaid' | 'paid' | 'cancelled';


export type BasketItem = {
    product_id: Identifier;
    quantity: number;
    total: number;
    rate: number;
};

export interface Invoice extends RaRecord {
    date: Date;
    products: BasketItem[];
    status: InvoiceStatus;
    total: number;
    total_ex_taxes: number;
    delivery_fees: number;
    tax_rate: number;
    taxes: number;
    customer_id: Identifier;
    reference: string;
}