import NextLink from "next/link";
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { CartList, OrderSumary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";

const SumaryPage = () => {
  return (
    <ShopLayout
      title="Order Summary"
      pageDescription="Order Summary for payment"
    >
      <Typography variant="h1" component="h1">
        Summary
      </Typography>
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
              <Button color="secondary" className="circular-btn" fullWidth>
                Confirm Order
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SumaryPage;
