import React, { FC } from 'react';
import { Box, Container } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';
import { router } from './routes/RootRouter';
import { Header } from './components';

/**
 * TODO: add comments.
 */
export const App: FC = () => {
  const routes = useRoutes(router(true));

  return (
    <Container maxW="container.xl" background="unset">
      <Header />
      {routes}
    </Container>
  );
};
