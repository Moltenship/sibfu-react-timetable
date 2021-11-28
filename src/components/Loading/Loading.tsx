import React, { VFC } from 'react';
import { CircularProgress } from '@chakra-ui/react';

/**
 * Loading component.
 */
export const Loading: VFC = () => (
  <CircularProgress isIndeterminate />
);
