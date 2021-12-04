import { QueryObserverOptions, useQuery, UseQueryResult } from 'react-query';
import { fetchTargets } from 'sibfu-timetable-api';

/**
 * Hook for getting timetable by target.
 * @param target Target.
 * @param options Query options.
 */
export const useTargets = (target = '', options?: QueryObserverOptions<string[], Error>): UseQueryResult<string[], Error> =>
  useQuery(['targets', target], () => fetchTargets(target), {
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options,
  });
