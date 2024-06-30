import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeCreateInput = {
  price?: number | null;
  quantity?: number | null;
  status?: "Option1" | null;
  tradeDate?: Date | null;
  tradeType?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
