import { InputJsonValue } from "../../types";
import { TradeCreateNestedManyWithoutUsersInput } from "./TradeCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  trades?: TradeCreateNestedManyWithoutUsersInput;
  username: string;
};
