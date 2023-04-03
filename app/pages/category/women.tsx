import { Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { Loading } from "@/components/ui";

export default function WomenPage() {
  const { products, isLoading } = useProducts("/products?gender=women");

  return (
    <>
      <ShopLayout
        title="Testa - Women"
        pageDescription="Testa official products for women"
      >
        <Typography variant="h1" component="h1">
          Shop
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Women Products
        </Typography>
        {isLoading ? <Loading /> : <ProductList products={products} />}
      </ShopLayout>
    </>
  );
}
