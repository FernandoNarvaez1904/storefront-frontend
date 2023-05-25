import { Button, Group } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { DoorExit } from 'tabler-icons-react';

function HeaderPOS() {
  return (
    <Group>
      <Button
        size="sm"
        color="red"
        leftIcon={<DoorExit />}
        component={Link}
        to="/"
      >
        Exit
      </Button>
    </Group>
  );
}

export default HeaderPOS;
