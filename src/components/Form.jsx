import { React, useState } from "react";

import { Box, InputBase, Button, styled } from "@mui/material";
import { getWeather } from "../services/api";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  borderRadius: "0 20px 0px 0",
  backgroundColor: "#1e213a",
  padding: "10px",
  [theme.breakpoints.down("md")]: { padding: 5 },
  [theme.breakpoints.down("sm")]: {
    padding: 3,
    borderRadius: "0 0 0 0",
    flexDirection: "column",
  },
  [theme.breakpoints.down("xs")]: { padding: 2 },
}));

const Input = styled(InputBase)(({ theme }) => ({
  color: "#1e312a",
  fontSize: 18,
  [theme.breakpoints.down("md")]: { fontSize: 14 },
  [theme.breakpoints.down("sm")]: { fontSize: 12 },
  [theme.breakpoints.down("xs")]: { fontSize: 10 },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: "white",
  borderRadius: "3px",
  padding:"5px",
  [theme.breakpoints.down("md")]: { marginTop: "0px" },
  [theme.breakpoints.down("sm")]: { marginTop: "0px" },
  [theme.breakpoints.down("xs")]: { marginTop: "0px" },
}));

const GetButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  backgroundColor: "#e67e22",
  [theme.breakpoints.down("md")]: { size: "small", marginTop: "0px" },
  [theme.breakpoints.down("sm")]: { size: "small", marginTop: "0px" },
  [theme.breakpoints.down("xs")]: { size: "small", marginTop: "20px" },
}));
const Form = ({ setResult, setIsLoading, isLoading }) => {
  const [data, setData] = useState({ city: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setData({ [e.target.name]: e.target.value });
    // console.log(data);
  };
  const getWeatherInfo = async () => {
    setIsLoading(true);
    let response = await getWeather(data.city);
    setResult(response);
    setIsLoading(false);
  };
  return (
    <Container>
      <InputContainer>
        <Input
          placeholder="Search for city"
          onChange={(e) => handleChange(e)}
          name="city"
        />
      </InputContainer>
      <GetButton variant="contained" onClick={() => getWeatherInfo()}>
        Get Weather
      </GetButton>
    </Container>
  );
};

export default Form;
