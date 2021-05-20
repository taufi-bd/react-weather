import React from "react";
import { Heading, Center } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <Heading bg="#0098DB" color="#F2EDE4" py={["4", "6", "8", "8"]}>
      <Center>Weather App</Center>
    </Heading>
  );
};
