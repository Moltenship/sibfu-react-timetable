import React, { useEffect, useState, VFC } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { TimetableDate } from 'sibfu-timetable-api';
import { Loading } from '../../../../components';
import { BaseTimetable, DayItem } from '../../components';
import { useTimetable } from '../../queries';
import { useKey } from '../../../../hooks';

/** Timetable page. */
export const TimetablePage: VFC = () => {
  const { target } = useParams();

  const [date, setDate] = useState(new Date());

  const { data, isLoading, error } = useTimetable(target, {
    enabled: Boolean(target),
  });

  useEffect(() => {
    if (target) {
      document.title = target;
    }
  }, [target]);

  /** Handles left arrow press. */
  const handleArrowLeftKeyDown = (): void => {
    setDate(TimetableDate.subtractDays(date, 1));
  };

  /** Handles left arrow press. */
  const handleArrowRightKeyDown = (): void => {
    setDate(TimetableDate.addDays(date, 1));
  };

  useKey('ArrowLeft', handleArrowLeftKeyDown);
  useKey('ArrowRight', handleArrowRightKeyDown);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Loading isLoading={isLoading}>
      <Box>
        {data && (
          <Stack spacing="4">
            <DayItem
              classes={data.getClassesByDate(date)}
              date={date}
              day={date.getDay()}
            />
            <BaseTimetable timetable={data} />
          </Stack>
        )}
      </Box>
    </Loading>
  );
};
