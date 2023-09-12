import { CartItemInterface } from 'interfaces/cart-item';
import { OrderInterface } from 'interfaces/order';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CartInterface {
  id?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  order?: OrderInterface[];
  user?: UserInterface;
  _count?: {
    cart_item?: number;
    order?: number;
  };
}

export interface CartGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
