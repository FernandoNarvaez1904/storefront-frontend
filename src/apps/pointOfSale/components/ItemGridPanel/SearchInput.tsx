import { Search } from 'tabler-icons-react';
import { TextInput } from '@mantine/core';
import React, { Dispatch } from 'react';

type Props = {
  value: { name: string };
  setValue: Dispatch<React.SetStateAction<{ name: string }>>;
};

function SearchInput({ value, setValue }: Props) {
  return (
    <TextInput
      value={value.name}
      onChange={(e) => setValue({ name: e.target.value })}
      icon={<Search size={18} />}
      radius="xl"
      size="sm"
      placeholder="Search Items"
      rightSectionWidth={42}
    />
  );
}

export default SearchInput;
