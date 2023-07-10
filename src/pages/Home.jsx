import { React, useState } from "react";

import { Box, styled } from "@mui/material";
import Sunset from "../assets/images/bg.jpg";

import Form from "../components/Form";
import Information from "../components/Information";

const Component = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  width: "65%",
  alignItems: "center",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",

    borderRadius: "20px 20px 20px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",

    borderRadius: "20px 20px 20px 20px",
  },
}));

const Image = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${Sunset})`,
  width: "27%",
  height: "80%",
  backgroundSize: "cover",
  borderRadius: "20px 0 0 20px",
  [theme.breakpoints.down("md")]: {
    width: "65%",

    borderRadius: "20px 20px 0 0",
    backgroundSize: "cover",
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Home = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Component>
      <Image></Image>
      <Box
        style={{
          width: "73%",
          height: "80%",
          backgroundColor: "#1e213a",
          borderRadius: "0 20px 20px 0",
        }}
        sx={{ width: { md: "90%" } }}
      >
        <Form
          setResult={setResult}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Information result={result} isLoading={isLoading} />
      </Box>
    </Component>
  );
};

export default Home;
