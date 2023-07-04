export interface IProfileData {
  id: number;
  login: string;
  balance_usdt: number;
  balance_btc: number;
  balance_eth: number;
}

export interface IProfile {
  success: boolean;
  data: IProfileData;
}
