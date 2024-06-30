import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TradeWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  status?: "Option1";
  tradeDate?: DateTimeNullableFilter;
  tradeType?: "Option1";
  user?: UserWhereUniqueInput;
};
