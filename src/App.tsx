import React, { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';
import { router } from './routes/RootRouter';
import { Footer, Header } from './components';

/**
 * TODO: add comments.
 */
export const App: FC = () => {
  const routes = useRoutes(router(true));

  return (
    <Box h="full">
      <Container maxW="container.xl" display="flex" h="full" flexDir="column">
        <Header />
        <Box flexGrow={1}>
          {routes}
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};
