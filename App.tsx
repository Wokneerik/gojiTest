import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';

import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Navigation from './src/navigation';

const client = new QueryClient();

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <QueryClientProvider client={client}>
          <Navigation />
        </QueryClientProvider>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
