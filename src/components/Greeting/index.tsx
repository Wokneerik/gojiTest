import React from 'react';

import {Text} from '@gluestack-ui/themed';
import {format} from 'date-fns';

const getGreeting = ({hour}: {hour: number}) => {
  if (hour >= 6 && hour < 12) {
    return 'morning';
  }
  if (hour >= 12 && hour < 21) {
    return 'afternoon';
  }
  return 'night';
};

const greeting = getGreeting({hour: new Date().getHours()});

const today = new Date();

const Greeting = () => {
  return (
    <>
      <Text size="2xl" fontWeight="500" color="white">
        Good {greeting} Pan
      </Text>
      <Text size="xl" fontWeight="500" color="white">
        It's {format(today, 'eeee, LLL dd')}
      </Text>
    </>
  );
};

export default Greeting;
