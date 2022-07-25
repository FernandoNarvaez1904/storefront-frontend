import React from 'react';
import { DefaultProps, Paper } from '@mantine/core';

function CurrentOrderPanel(props: DefaultProps) {
  return (
    <Paper withBorder shadow="xl" {...props}>
      <h1>Current</h1>
    </Paper>
  );
}

export default CurrentOrderPanel;
