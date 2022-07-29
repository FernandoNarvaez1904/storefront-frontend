import { Button, Group } from '@mantine/core';
import React from 'react';
import { DoorExit } from 'tabler-icons-react';

function HeaderPOS() {
  return (
    <Group>
      <Button size="sm" color="red" leftIcon={<DoorExit />}>
        Exit
      </Button>
    </Group>
  );
}

export default HeaderPOS;
