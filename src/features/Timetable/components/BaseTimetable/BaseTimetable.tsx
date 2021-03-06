import React, { memo, useState, VFC } from 'react';
import { Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Badge } from '@chakra-ui/react';
import { DisplayWeeks, SortedDays, Timetable, TimetableDate, Week } from 'sibfu-timetable-api';
import { DayItem } from '../../components';

interface Props {

  /** Timetable data. */
  timetable: Timetable;
}

/** Timetable page. */
const BaseTimetableComponent: VFC<Props> = ({ timetable }) => {
  const today = new Date();

  const [week, setWeek] = useState(
    TimetableDate.getWeekStatus(today),
  );

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
  const currentWeekBadge = (weekType: Week): JSX.Element => (
    <>
      {weekType === TimetableDate.getWeekStatus(today) && (
        <Badge colorScheme="gray" marginLeft="1">Текущая</Badge>
      )}
    </>
  );

  const tabList = (
    <TabList position="sticky" top="0" bg="white" padding="2">
      {
        Object.keys(DisplayWeeks).map(key => (
          <Tab color="orange" key={key} display="flex" flexWrap="wrap">
            {DisplayWeeks[Number(key) as Week]}
            {currentWeekBadge(Number(key))}
          </Tab>
        ))
      }
    </TabList>
  );

  const weekClasses = (
    <Stack spacing="2">
      {SortedDays.map(day => (
        <DayItem
          key={day}
          day={Number(day)}
          classes={timetable.getClassesByDayAndWeek(day, week)}
        />
      ))}
    </Stack>
  );

  const tabPanels = (
    <TabPanels>
      {
        Object.keys(DisplayWeeks).map(key => (
          <TabPanel paddingInline="0" pb="0" key={key}>
            {weekClasses}
          </TabPanel>
        ))
      }
    </TabPanels>
  );

  return (
    <Tabs index={week - 1} onChange={handleTabsChange}>
      {tabList}
      {tabPanels}
    </Tabs>
  );
};

export const BaseTimetable = memo(BaseTimetableComponent);
