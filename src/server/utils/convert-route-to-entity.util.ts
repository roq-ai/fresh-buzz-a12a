const mapping: Record<string, string> = {
  carts: 'cart',
  'cart-items': 'cart_item',
  inventories: 'inventory',
  orders: 'order',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
