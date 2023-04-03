import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page not Found"
      pageDescription="Whoops, nothing to show here"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(50vh)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404
        </Typography>
        <Typography
          marginLeft={2}
          fontSize={80}
          fontWeight={200}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          |
        </Typography>
        <Typography marginLeft={2} fontWeight={400} textAlign="center">
          Whoops, couldnt find the page you were looking for.
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
