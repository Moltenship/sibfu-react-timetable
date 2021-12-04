import React, { VFC } from 'react';
import { Box, Button, Text, Kbd, useDisclosure } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { ModalSearch } from '..';

/** App header. */
export const Header: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box my="4">
        <Button justifyContent="start" w="full" variant="ghost" color="grey" shadow="md" onClick={onOpen}>
          <Box mr="2">
            <Icon icon="carbon:search" />
          </Box>
          <Text>Найти группу</Text>
          <Box ml="auto">
            <Kbd>ctrl</Kbd>
            +
            <Kbd>K</Kbd>
          </Box>
        </Button>
      </Box>
      <ModalSearch isOpen={isOpen} onClose={onClose} />
    </>
  );
};
