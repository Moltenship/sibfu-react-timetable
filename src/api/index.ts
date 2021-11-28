import { QueryClient } from 'react-query';
import axios, { AxiosInstance } from 'axios';

export const queryClient = new QueryClient();

/**
 * Module for interaction with autocomplete api.
 */
export const autocompleteModule = axios.create({
  baseURL: 'http://edu.sfu-kras.ru/api/timetable/autocomplete_new/',
});

/**
 * Module for interaction with timetable api.
 */
export const timetableModule = axios.create({
  baseURL: 'http://edu.sfu-kras.ru/api/timetable/',
});
