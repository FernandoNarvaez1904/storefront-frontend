import { Search } from 'tabler-icons-react';
import { DefaultProps, TextInput } from '@mantine/core';
import React from 'react';

function SearchInput(props: DefaultProps) {
  return (
    <TextInput
      icon={<Search size={18} />}
      radius="xl"
      size="sm"
      placeholder="Search Items"
      rightSectionWidth={42}
      {...props}
    />
  );
}

export default SearchInput;
