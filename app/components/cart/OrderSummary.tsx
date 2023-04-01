import { Grid, Typography } from "@mui/material";
import { FC } from "react";

interface Props {}

export const OrderSumary: FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Products</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography>3</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>SubTotal</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography>{`$${150.65}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Taxes</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography>{`%${15}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Shipping</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography>{`$${20}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} display={"flex"} justifyContent={"end"}>
        <Typography variant="subtitle1">{`$${200}`}</Typography>
      </Grid>
    </Grid>
  );
};
