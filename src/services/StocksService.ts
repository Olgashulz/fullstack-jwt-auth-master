import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {LatestCurrencyResponse} from "../models/response/LatestCurrencyResponse";

export default class StocksService {
    static async currency( from: string,amount: number, to: string): Promise<AxiosResponse<LatestCurrencyResponse>> {
        return $api.post<LatestCurrencyResponse>('/latest', {from, to, amount})
    }


}

