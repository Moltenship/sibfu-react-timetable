import React, { memo, VFC } from 'react';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';
import { Class, Day, DisplayDays, DisplayMonths, Month } from 'sibfu-timetable-api';
import { ClassItem } from '..';

interface Props {

  /** Classes in day. */
  readonly classes: Class[];

  /** Current date. */
  readonly date?: Date;

  /** Current day. */
  readonly day: Day;
}

/** Contains list of classes for given date. */
const DayItemComponent: VFC<Props> = ({ classes, day, date }) => {
  const classList = classes.map(classItem => <ClassItem classItem={classItem} key={classItem.time} />);

  return (
    <Box borderWidth="2px" padding="2" borderRadius="lg">
      <Heading as="h2" fontSize="xl" borderBottom="1px" borderBottomColor="gray.200" paddingBottom="2">
        <HStack>
          <Text>
            {DisplayDays[day]}
          </Text>
          {date && (
            <Text fontWeight="light">
              {`${date.getDate()} ${DisplayMonths[date.getMonth() as Month]}`}
            </Text>
          )}
        </HStack>
      </Heading>
      {classList.length > 0 ? classList : (
        <Text textAlign="center" paddingTop="2">
          Сегодня нет занятий.
        </Text>
      )}
    </Box>
  );
};

export const DayItem = memo(DayItemComponent);
