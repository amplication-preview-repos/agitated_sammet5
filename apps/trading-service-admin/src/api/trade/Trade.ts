import { User } from "../user/User";

export type Trade = {
  createdAt: Date;
  id: string;
  price: number | null;
  quantity: number | null;
  status?: "Option1" | null;
  tradeDate: Date | null;
  tradeType?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
