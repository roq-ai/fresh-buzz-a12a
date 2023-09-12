import { CartItemInterface } from 'interfaces/cart-item';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  fruit_name: string;
  quantity: number;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  vendor?: VendorInterface;
  _count?: {
    cart_item?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  fruit_name?: string;
  vendor_id?: string;
}
