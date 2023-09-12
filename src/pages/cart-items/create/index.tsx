import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createCartItem } from 'apiSdk/cart-items';
import { cartItemValidationSchema } from 'validationSchema/cart-items';
import { CartInterface } from 'interfaces/cart';
import { InventoryInterface } from 'interfaces/inventory';
import { getCarts } from 'apiSdk/carts';
import { getInventories } from 'apiSdk/inventories';
import { CartItemInterface } from 'interfaces/cart-item';

function CartItemCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: CartItemInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createCartItem(values);
      resetForm();
      router.push('/cart-items');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<CartItemInterface>({
    initialValues: {
      quantity: 0,
      cart_id: (router.query.cart_id as string) ?? null,
      inventory_id: (router.query.inventory_id as string) ?? null,
    },
    validationSchema: cartItemValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Cart Items',
              link: '/cart-items',
            },
            {
              label: 'Create Cart Item',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Cart Item
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Quantity"
            formControlProps={{
              id: 'quantity',
              isInvalid: !!formik.errors?.quantity,
            }}
            name="quantity"
            error={formik.errors?.quantity}
            value={formik.values?.quantity}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('quantity', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<CartInterface>
            formik={formik}
            name={'cart_id'}
            label={'Select Cart'}
            placeholder={'Select Cart'}
            fetcher={getCarts}
            labelField={'id'}
          />
          <AsyncSelect<InventoryInterface>
            formik={formik}
            name={'inventory_id'}
            label={'Select Inventory'}
            placeholder={'Select Inventory'}
            fetcher={getInventories}
            labelField={'fruit_name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/cart-items')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'cart_item',
    operation: AccessOperationEnum.CREATE,
  }),
)(CartItemCreatePage);
