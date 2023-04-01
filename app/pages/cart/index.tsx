import { CartList, OrderSumary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";

const CartPage = () => {
  return (
    <ShopLayout title="Cart" pageDescription="Testa shopping cart">
      <Typography variant="h1" component="h1">
        Cart
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList editable />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <Typography variant="h2">Summary</Typography>
            <Divider sx={{ my: 1 }} />

            <OrderSumary />

            <Box sx={{ mt: 3 }}>
              <Button color="secondary" className="circular-btn" fullWidth>
                Checkout
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
