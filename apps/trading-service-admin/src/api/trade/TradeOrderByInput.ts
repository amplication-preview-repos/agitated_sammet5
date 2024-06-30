import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  tradeDate?: SortOrder;
  tradeType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
