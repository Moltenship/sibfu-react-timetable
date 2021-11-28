import React, { useState, VFC } from 'react';
import { Container, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useParams } from 'react-router';
import { Loading } from '../../../../components';
import { SortedDays } from '../../../../utils/enums/days';
import { DayItem } from '../../components';
import { useTimetable } from '../../queries';

/** Timetable page. */
export const TimetablePage: VFC = () => {
  const [week, setWeek] = useState(1);

  const { target } = useParams();

  const { data, isLoading, error } = useTimetable(target, {
    enabled: Boolean(target),
  });

  /**
   * Handles tab change.
   * @param index Tab index.
   */
  const handleTabsChange = (index: number): void => {
    setWeek(index + 1);
  };

  /**
   * @param weekType Whether week is odd or even.
   */
  const weekClasses = (weekType: number): JSX.Element => (
    <Stack spacing="2">
      {data && (
        SortedDays.map(day => (
          <DayItem
            key={day}
            day={Number(day)}
            classes={data.getClassesByDayAndWeek(day, weekType)}
          />
        )))}
    </Stack>
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <div>{target}</div>

      <Container>
        <Tabs onChange={handleTabsChange}>
          <TabList>
            <Tab>Чётная</Tab>
            <Tab>Нечётная</Tab>
          </TabList>
          <TabPanels>
            <TabPanel paddingInline="0">
              {weekClasses(week)}
            </TabPanel>
            <TabPanel paddingInline="0">
              {weekClasses(week)}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </div>
  );
};
