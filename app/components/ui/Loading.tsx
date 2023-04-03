import { Box, CircularProgress, Typography } from "@mui/material";
import { FC } from "react";

interface Props {}

export const Loading: FC<Props> = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      height="calc(50vh)"
    >
      <CircularProgress thickness={2} size={100} />
    </Box>
  );
};
