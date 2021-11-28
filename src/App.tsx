import React, { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { router } from './routes/RootRouter';

/**
 * TODO: add comments.
 */
export const App: FC = () => {
  const routes = useRoutes(router(true));

  return (
    <div>
      {routes}
    </div>
  );
};
