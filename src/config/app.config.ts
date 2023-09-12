interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Inventory Manager'],
  tenantName: 'Vendor',
  applicationName: 'fresh buzz',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage personal profile.',
    'View list of available fresh fruits.',
    'Manage fresh fruits in shopping cart.',
    "View Vendor's profile.",
    'Checkout shopping cart.',
    'View past purchases.',
  ],
  ownerAbilities: [
    'Manage Vendor profiles',
    'Invite Inventory Managers to the application',
    'Delete Customer profiles',
    'View list of all Customers',
    "Deactivate Inventory Manager's access to the application",
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/01a454cb-3294-40b6-aaf7-5dff925ae4aa',
};
