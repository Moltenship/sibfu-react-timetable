import React, { VFC } from 'react';
import { Box, Container, Stack } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { Loading } from '../../../../components';
import { BaseTimetable, DayItem } from '../../components';
import { useTimetable } from '../../queries';

/** Timetable page. */
export const TimetablePage: VFC = () => {
  const today = new Date();
  const { target } = useParams();

  const { data, isLoading, error } = useTimetable(target, {
    enabled: Boolean(target),
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Loading isLoading={isLoading}>
      <Box>
        {data && (
          <Stack spacing="4">
            <DayItem
              classes={data.getClassesByDate(today)}
              date={today}
              day={today.getDay()}
            />
            <BaseTimetable timetable={data} />
          </Stack>
        )}
      </Box>
    </Loading>
  );
};
