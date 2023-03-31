import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";

export default function Home() {
  return (
    <>
      <ShopLayout
        title="Testa - Home"
        pageDescription="Find your Testa official products"
      >
        <Typography variant="h1" component="h1">
          Shop
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          All Products
        </Typography>
      </ShopLayout>
    </>
  );
}
