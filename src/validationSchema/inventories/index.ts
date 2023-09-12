import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  fruit_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  vendor_id: yup.string().nullable().required(),
});
