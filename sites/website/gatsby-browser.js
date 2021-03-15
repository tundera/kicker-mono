// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '@chakra-ui/gatsby-plugin/src/theme';

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {element}
  </ChakraProvider>
);
