export interface ExchangeRateResponse {
    table: string;
    no: string;
    effectiveDate: string;
    rates: ExchangeRateData[];
}

export interface ExchangeRateData {
    currency: string;
    code: string;
    mid: number;
}