import { ISize } from "@/interfaces";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((e) => (
        <Button
          key={e}
          size="small"
          color={selectedSize === e ? "primary" : "info"}
        >
          {e}
        </Button>
      ))}
    </Box>
  );
};
