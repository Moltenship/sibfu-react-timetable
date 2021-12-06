import React, { memo, VFC } from 'react';
import { Badge, Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { Class } from 'sibfu-timetable-api';
import cls from './ClassItem.module.css';
import { ClassTypeColors } from '../../../../utils/enums/classType';
import { SyncTypeColors } from '../../../../utils/enums/syncType';

interface Props {

  /** Class object. */
  readonly classItem: Class;
}

/** Class item component. */
const ClassItemComponent: VFC<Props> = ({ classItem }) => (
  <Box fontSize="xs" className={cls.class} padding="2">
    <Stack spacing="1">
      <Heading as="h3" size="xs" fontWeight="semibold">{classItem.subject}</Heading>
      <Stack fontSize="xs" direction="row" spacing="2">
        {classItem.type && (
          <Badge colorScheme={ClassTypeColors[classItem.type]} fontSize="xs">
            {classItem.type}
          </Badge>
        )}
        <Badge colorScheme={SyncTypeColors[classItem.sync]} fontSize="xs">
          {classItem.sync}
        </Badge>
      </Stack>
      <Box>
        <Text>{classItem.time}</Text>
        {classItem.place && <Text>{classItem.place}</Text>}
      </Box>
      <Box>
        {classItem.teacher && (
          <Link as={NavLink} to={`/${classItem.teacher}`}>
            {classItem.teacher}
          </Link>
        )}
      </Box>
    </Stack>
  </Box>
);

export const ClassItem = memo(ClassItemComponent);
