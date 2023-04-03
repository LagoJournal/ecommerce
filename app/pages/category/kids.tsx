import { Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { Loading } from "@/components/ui";

export default function KidsPage() {
  const { products, isLoading } = useProducts("/products?gender=kid");

  return (
    <>
      <ShopLayout
        title="Testa - Kids"
        pageDescription="Testa official products for kids"
      >
        <Typography variant="h1" component="h1">
          Shop
        </Typography>
        <Typography variant="h2" sx={{ mb: 1 }}>
          Kids Products
        </Typography>
        {isLoading ? <Loading /> : <ProductList products={products} />}
      </ShopLayout>
    </>
  );
}
