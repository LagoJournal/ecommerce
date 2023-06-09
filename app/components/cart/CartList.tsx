import { FC } from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { initialData } from "@/database/products";
import { ItemCounter } from "../ui";

interface Props {
  editable?: boolean;
}

const cartProducts = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];
export const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {cartProducts.map((e) => (
        <Grid container key={e.slug} spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href="/product/slug" passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${e.images[0]}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{e.title}</Typography>
              <Typography variant="body1">Size:</Typography>
              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant="h5">1</Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography variant="subtitle1">{`$${e.price}`}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
