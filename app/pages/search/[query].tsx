import { Box, Typography } from "@mui/material";
import { ShopLayout } from "@/components/layouts";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";
import { Loading } from "@/components/ui";
import { GetServerSideProps, NextPage } from "next";
import { dbProducts } from "@/database";
import { IProduct } from "@/interfaces";

interface Props {
  query: string;
  products: IProduct[];
  foundProducts: boolean;
}

const SearchPage: NextPage<Props> = ({ query, products, foundProducts }) => {
  return (
    <>
      <ShopLayout
        title="Testa - Results"
        pageDescription="Seach results for products"
      >
        {foundProducts ? (
          <>
            <Typography variant="h1" component="h1">
              Results for
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
              {query}
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h1" component="h1">
              Whoops!
            </Typography>
            <Box display="flex" sx={{ mb: 1 }}>
              <Typography variant="h2">No results for</Typography>
              <Typography variant="h2" color="secondary" sx={{ pl: 1 }}>
                {query}
              </Typography>
              <Typography variant="h2">
                , but this might be what youre looking for
              </Typography>
            </Box>
          </>
        )}
        <ProductList products={products} />
      </ShopLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  let products = await dbProducts.getProductsByTerms(query);
  const foundProducts = products.length > 0;
  if (!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      query,
      products,
      foundProducts,
    },
  };
};

export default SearchPage;
