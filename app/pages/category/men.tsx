import { Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { Loading } from "@/components/ui";

export default function MenPage() {
  const { products, isLoading } = useProducts("/products?gender=men");

  return (
    <>
      <ShopLayout
        title="Testa - Men"
        pageDescription="Testa official products for men"
      >
        <Typography variant="h1" component="h1">
          Shop
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Men Products
        </Typography>
        {isLoading ? <Loading /> : <ProductList products={products} />}
      </ShopLayout>
    </>
  );
}
