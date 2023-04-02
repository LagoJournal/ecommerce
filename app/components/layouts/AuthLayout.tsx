import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const AuthLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Box
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
          height={"50vh"}
        >
          {children}
        </Box>
      </main>
    </>
  );
};
