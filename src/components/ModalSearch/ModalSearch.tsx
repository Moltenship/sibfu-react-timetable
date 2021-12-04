import React, { ChangeEvent, useState, VFC } from 'react';
import { Stack, Modal, ModalOverlay, ModalBody, ModalContent, InputGroup, Input, InputLeftElement } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useTargets } from '../../features/Timetable/queries';
import { debounce } from '../../utils/helpers';
import { SearchResultItem } from '..';
import cls from './ModalSearch.module.css';

interface Props {

  /** Whether modal is open or not. */
  isOpen: boolean;

  /** Handles modal close. */
  onClose: () => void;
}

/** App header. */
export const ModalSearch: VFC<Props> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState<string>('КИ');
  const { data } = useTargets(value, { enabled: Boolean(value) });

  /** Handles input change. */
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const targets = data && data.length > 0 &&
    <Stack>{data.slice(0, 5).map(target => <SearchResultItem key={target} onClick={onClose} target={target} />)}</Stack>;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="none">
        <ModalBody p="0">
          <Stack bg="white" borderRadius="md" p="2">
            <InputGroup>
              <InputLeftElement>
                <Icon icon="carbon:search" />
              </InputLeftElement>
              <Input
                className={cls.input}
                bg="white"
                variant="filled"
                value={value}
                onChange={handleChange}
                placeholder="Группа или преподаватель"
              />
            </InputGroup>
            {targets}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
