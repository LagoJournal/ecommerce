import { ShopLayout } from "@/components/layouts";
import NextLink from "next/link";
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const column: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Fullname", width: 300 },
  {
    field: "paid",
    headerName: "Payment",
    width: 200,
    renderCell: (params: any) => {
      return params.row.paid ? (
        <Chip color="success" variant="outlined" label="Paid" />
      ) : (
        <Chip color="error" variant="outlined" label="Not Paid" />
      );
    },
  },
  {
    field: "order",
    headerName: "Go to",
    width: 200,
    sortable: false,
    renderCell: (params: any) => (
      <NextLink href={`/orders/${params.row.id}`} passHref>
        <Link underline="always">Go to</Link>
      </NextLink>
    ),
  },
];

const row = [
  { id: 1, paid: true, fullname: "Agustin Lago" },
  { id: 2, paid: false, fullname: "Agustin Lago" },
  { id: 3, paid: true, fullname: "Agustin Lago" },
  { id: 4, paid: true, fullname: "Agustin Lago" },
  { id: 5, paid: false, fullname: "Agustin Lago" },
  { id: 6, paid: true, fullname: "Agustin Lago" },
  { id: 7, paid: true, fullname: "Agustin Lago" },
  { id: 8, paid: false, fullname: "Agustin Lago" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Orders History"
      pageDescription="Client order history summary"
    >
      <Typography variant="h1" component="h1">
        Orders history
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid rows={row} columns={column} />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
