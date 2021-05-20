import React from 'react';
import dayjs from 'dayjs';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Center,
} from '@chakra-ui/react';
import { SingleDay } from './SingleDay';

export const DailyForecast = ({ forecast, geticon }) => {
  const dayCount = [0, 1, 2, 3, 4];

  return (
    <>
      <Center color="blue.900" mt={['4', '6', '10', '14']}>
        <Tabs>
          <TabList>
            {dayCount.map((day, index) => {
              const dayName = dayjs().add(day, 'day').format('dddd');
              return (
                <Tab key={index} mx="6">
                  {dayName}
                </Tab>
              );
            })}
          </TabList>

          <TabPanels>
            {dayCount.map((dayItem, index) => {
              return (
                <TabPanel key={index}>
                  <Flex>
                    <SingleDay
                      forecast={forecast}
                      geticon={geticon}
                      dayItem={dayItem}
                    />
                  </Flex>
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Center>
    </>
  );
};
