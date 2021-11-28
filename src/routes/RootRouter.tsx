import React from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import { TimetablePage } from '../features/Timetable/pages';
import { timetableRoutes } from '../features/Timetable/routes';

/**
 * Creates root router for app navigation.
 * @param isUserLoggedIn Is current user logged in or not.
 */
export const router = (isUserLoggedIn: boolean): RouteObject[] => [
  ...timetableRoutes(),
  {
    path: '/',

    /**
     * TODO: change redirection path.
     */
    element: <TimetablePage />,
  },
];
