import React from "react";
import "../spinner.css";

import { Box, styled } from "@mui/material";

const Loader = styled(Box)(({ theme }) => ({
  margin: "180px 0 0 290px  ",
  [theme.breakpoints.down("md")]: { margin: "80px 0 0 50px " },
  [theme.breakpoints.down("sm")]: { margin: "10px 0 0 10px " },
  [theme.breakpoints.down("xs")]: { margin: "20px 0 0 50px " },
}));
export default function LoadingSpinner() {
  return (
    <Loader>
      <div className="loading-spinner"></div>
    </Loader>
  );
}
