import { IProduct } from "@/interfaces";
import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { Loading } from "@/components/ui";

export default function Home() {
  const { products, isLoading } = useProducts("/products");

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
        {isLoading ? <Loading /> : <ProductList products={products} />}
      </ShopLayout>
    </>
  );
}
