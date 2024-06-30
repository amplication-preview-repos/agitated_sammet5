import { JsonValue } from "type-fest";
import { Trade } from "../trade/Trade";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  trades?: Array<Trade>;
  updatedAt: Date;
  username: string;
};
