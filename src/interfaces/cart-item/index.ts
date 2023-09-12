import { CartInterface } from 'interfaces/cart';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface CartItemInterface {
  id?: string;
  cart_id: string;
  inventory_id: string;
  quantity: number;
  created_at?: any;
  updated_at?: any;

  cart?: CartInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface CartItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  cart_id?: string;
  inventory_id?: string;
}
