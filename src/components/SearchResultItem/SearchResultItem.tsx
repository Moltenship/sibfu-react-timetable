import React, { VFC } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useTargets } from '../../features/Timetable/queries';

interface Props {

  /** Group or teacher name. */
  target: string;

  /** Handles modal closing. */
  onClick: () => void;
}

/** App header. */
export const SearchResultItem: VFC<Props> = ({ target, onClick }) => (
  <NavLink onClick={onClick} to={`/${target}`}>
    <Box borderRadius="md" bg="gray.100" padding="2">
      <Text>{target}</Text>
    </Box>
  </NavLink>
);
