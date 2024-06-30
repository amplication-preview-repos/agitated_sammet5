import { InputJsonValue } from "../../types";
import { TradeUpdateManyWithoutUsersInput } from "./TradeUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  trades?: TradeUpdateManyWithoutUsersInput;
  username?: string;
};
