import React, { VFC } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

interface Props {

  /** Group or teacher name. */
  target: string;

  /** Handles modal closing. */
  onClick: () => void;
}

/** Search result item. */
export const SearchResultItem: VFC<Props> = ({ target, onClick }) => (
  <Link
    as={NavLink}
    border="unset"
    _hover={{ bg: 'orange.600', color: 'white' }}
    bg="gray.100"
    to={`/${target}`}
    borderRadius="md"
    padding="2"
    onClick={onClick}
  >
    {target}
  </Link>
);
