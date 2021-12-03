import { QueryObserverOptions, useQuery, UseQueryResult } from 'react-query';
import { fetchTimetable, Timetable } from 'sibfu-timetable-api';

/** 10 min. */
const DEFAULT_STALE_TIME = 10000 * 60;

/**
 * Hook for getting timetable by target.
 * @param target Target.
 * @param options Query options.
 */
export const useTimetable = (target = '', options?: QueryObserverOptions<Timetable, Error>): UseQueryResult<Timetable, Error> =>
  useQuery(['timetable', target], () => fetchTimetable(target), {
    staleTime: DEFAULT_STALE_TIME,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options,
  });
