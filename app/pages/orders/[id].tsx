import NextLink from "next/link";
import {
  Box,
  Card,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSumary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout title="Order 5526" pageDescription="Summary for Order 5526">
      <Typography variant="h1" component="h1">
        Order: 5526
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pending Payment"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Paid Order"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <Typography variant="h2">Summary</Typography>
            <Divider sx={{ my: 1 }} />

            <Box display="flex" justifyContent={"end"}>
              <NextLink href="/checkout/address" passHref>
                <Link underline="always">Edit</Link>
              </NextLink>
            </Box>

            <Typography variant="subtitle1">Shipping Address</Typography>
            <Typography>Agustin Lago</Typography>
            <Typography>312 callefalsa</Typography>
            <Typography>Cordoba, 5000</Typography>
            <Typography>Argentina</Typography>
            <Typography>+54 9 3213213321</Typography>

            <Divider sx={{ my: 1 }} />

            <Box display="flex" justifyContent={"end"}>
              <NextLink href="/cart" passHref>
                <Link underline="always">Edit</Link>
              </NextLink>
            </Box>

            <OrderSumary />

            <Box sx={{ mt: 3 }}>
              <h1>Pay</h1>
            </Box>

            <Chip
              sx={{ my: 2 }}
              label="Paid Order"
              variant="outlined"
              color="success"
              icon={<CreditScoreOutlined />}
            />
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
