import React from "react";

import { Box, Typography, styled } from "@mui/material";
import {
  LocationOn,
  SettingsBrightness,
  Opacity,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud,
} from "@mui/icons-material";

import Spinner from "../components/Spinner";

const Row = styled(Typography)(({ theme }) => ({
  padding: 10,
  fontSize: 20,
  letterSpacing: 2,
  color: "white",
  "& > svg": {
    marginRight: 10,
  },
  [theme.breakpoints.down("md")]: {
    letterSpacing: 1,
    fontSize: 16,
    padding: 5,
  },
  [theme.breakpoints.down("sm")]: {
    letterSpacing: 0,
    fontSize: 14,
    padding: 2,
    "& > svg": {
      marginRight: 4,
      fontSize: 14,
    },
  },
}));

const Error = styled(Typography)({
  textAlign: "center",
  color: "red",
  margin: 50,
  letterSpacing: 1.5,
  padding: 20,
  fontSize: 18,
});

const Information = ({ result, isLoading }) => {
  if (result && Object.keys(result).length > 0) {
    if (result.cod === 200) {
      return (
        <Box
          style={{
            margin: "60px 60px",
            textAlign: "center",
          }}
        >
          <Row>
            <LocationOn />
            Location: {result.name}, {result.sys.country}
          </Row>
          <Row>
            <SettingsBrightness />
            Temperature: {result.main.temp}&deg;C
          </Row>
          <Row>
            <Opacity />
            Humidity: {result.main.humidity}
          </Row>
          <Row>
            <Brightness5 />
            Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
          </Row>
          <Row>
            <Brightness6 />
            Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
          </Row>
          <Row>
            <Dehaze />
            Wind Speed: {result.wind.speed}
          </Row>
          <Row>
            <Cloud />
            Clouds: {result.clouds.all}%
          </Row>
        </Box>
      );
    } else if (result.data.cod === "404") {
      return <Error>Oopss..City not found.Please try a valid city name </Error>;
    }
  } else {
    if (isLoading) {
      return <Spinner />;
    }
    return <Error>Please enter city name to check weather of that city</Error>;
  }
};

export default Information;
