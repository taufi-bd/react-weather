import React from "react";
import dayjs from "dayjs";
import setIcon from "../utils/setIcon";
import {
  Box,
  Center,
  Text,
  Flex,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const CityWeather = ({ data }) => {
  return (
    <>
      <Center mt={["0", "2", "4", "6"]}>
        <Box>
          <Text fontWeight="600" color="blue.900" fontSize="4.5em">
            {Math.round(data.temp)}°
          </Text>
        </Box>
      </Center>

      <Flex width="350px" mx="auto" mt={["0", "2", "4", "6"]}>
        <Box width="150px" p="4" bg="red.400" rounded="lg" shadow="lg">
          <Text fontSize="lg" color="white" textAlign="center" fontWeight="500">
            {data.location}, {data.country}
          </Text>
        </Box>
        <Spacer />
        <Box width="150px" p="4" bg="green.400" rounded="lg" shadow="lg">
          <Text fontSize="lg" color="white" textAlign="center" fontWeight="500">
            {dayjs().format("MMMM DD, YYYY")}
          </Text>
        </Box>
      </Flex>
      <Center>
        <Wrap spacing="30px" justify="center" mt={["6", "6", "6", "8"]}>
          <WrapItem>
            <Center
              color="white"
              fontWeight="500"
              fontSize="18px"
              w="180px"
              h="60px"
              bg="cyan.800"
              rounded="lg"
              shadow="lg"
            >
              {data.description}
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              color="white"
              fontWeight="500"
              fontSize="18px"
              w="180px"
              h="60px"
              bg="cyan.800"
              rounded="lg"
              shadow="lg"
            >
              {setIcon(data.iconId)}
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              color="white"
              fontWeight="500"
              fontSize="18px"
              w="180px"
              h="60px"
              bg="cyan.800"
              rounded="lg"
              shadow="lg"
            >
              Feels Like: {Math.round(data.feels_like)}°
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              color="white"
              fontWeight="500"
              fontSize="18px"
              w="180px"
              h="60px"
              bg="cyan.800"
              rounded="lg"
              shadow="lg"
            >
              H: {Math.round(data.temp_max)}° L: {Math.round(data.temp_min)}°
            </Center>
          </WrapItem>
          <WrapItem>
            <Center
              color="white"
              fontWeight="500"
              fontSize="18px"
              w="180px"
              h="60px"
              bg="cyan.800"
              rounded="lg"
              shadow="lg"
            >
              Humidity: {data.humidity}%
            </Center>
          </WrapItem>
        </Wrap>
      </Center>
    </>
  );
};
