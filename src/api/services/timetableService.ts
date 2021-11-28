import { TimetableMapper } from '../mappers/timetableMapper';
import { TimetableDto } from '../dtos/timetableDto';
import { timetableModule } from '../index';
import { Timetable } from '../../models/timetable';

/**
 * Fetches timetable by target.
 * @param target Target to fetch.
 */
export const fetchTimetable = async(target: string): Promise<Timetable> => {
  const { data } = await timetableModule.get<TimetableDto>('get', {
    params: {
      target,
    },
  });
  const timetableMapper = new TimetableMapper();
  return timetableMapper.fromDto(data);
};
