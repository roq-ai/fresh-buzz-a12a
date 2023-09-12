import { UserInterface } from 'interfaces/user';
import { CartInterface } from 'interfaces/cart';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  user_id: string;
  cart_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  cart?: CartInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  cart_id?: string;
  status?: string;
}
