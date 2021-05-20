import React from 'react';
import dayjs from 'dayjs';
import { Box, Flex, VStack } from '@chakra-ui/react';

export const SingleDay = ({ forecast, geticon, dayItem }) => {
  const dailyName = dayjs().add(dayItem, 'day').format('dddd');
  return (
    <>
      {forecast
        ? forecast.map((item, index) => {
            if (dayjs(item.dt_txt).format('dddd') === dailyName) {
              return (
                <Flex key={index}>
                  <VStack mx="4">
                    <Box>H: {Math.ceil(item.main.temp_max)}°</Box>
                    <Box>{geticon(item.weather[0].id)}</Box>
                    <Box>L: {Math.floor(item.main.temp_min)}°</Box>
                    <Box>{dayjs(item.dt_txt).format('h:00 A')}</Box>
                  </VStack>
                </Flex>
              );
            }
          })
        : null}
    </>
  );
};
