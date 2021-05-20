import React from "react";
import { Box, Center, Input, Text, Stack } from "@chakra-ui/react";
export const Search = ({ getCityWeather, changeLocation, isError }) => {
  return (
    <>
      <Box>
        <Box onSubmit={(e) => getCityWeather(e)}>
          <Center mt={["2", "4", "6", "8"]}>
            <Stack spacing={3}>
              <Box>
                {isError ? (
                  <Text textAlign="center" color="red">
                    Location not found
                  </Text>
                ) : null}{" "}
              </Box>
              {/* <Text color="blue.900" textAlign="center">
                Search for a Place
              </Text> */}
              <Input
                textAlign="center"
                focusBorderColor="blue.200"
                width="300px"
                variant="flushed"
                type="text"
                spellCheck="false"
                placeholder="Search for a Place"
                onChange={(e) => {
                  changeLocation(e.target.value);
                }}
                autoComplete="off"
              />
            </Stack>
          </Center>
        </Box>
      </Box>
    </>
  );
};
