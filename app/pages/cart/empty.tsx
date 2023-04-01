import NextLink from "next/link";
import { Box, Link, Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Empty Cart"
      pageDescription="There are no items on the shopping cart"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        height="calc(100vh -200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>Your cart is empty</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Home
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
