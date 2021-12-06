import React, { VFC } from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

/** App footer. */
export const Footer: VFC = () => (
  <Box py="2" display="flex" justifyContent="center">
    <Link href="https://github.com/Moltenship/sibfu-react-timetable" border="none">
      <Icon icon="carbon:logo-github" fontSize="2rem" />
    </Link>
  </Box>
);
