import React from 'react';
import { RouteObject } from 'react-router-dom';
import { TimetablePage } from './pages';

/**
 * Creates routes for test module.
 */
export const timetableRoutes = (): RouteObject[] => [
  {
    path: ':target',
    element: <TimetablePage />,
  },
];
