import { Search } from 'tabler-icons-react';
import { TextInput } from '@mantine/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filterItemValue } from '../../state/Atoms';

function SearchInput() {
  const [value, setValue] = useRecoilState(filterItemValue);

  return (
    <TextInput
      value={value.value}
      onChange={(e) => setValue({ kind: 'name', value: e.target.value })}
      icon={<Search size={18} />}
      radius="xl"
      size="sm"
      placeholder="Search Items"
      rightSectionWidth={42}
    />
  );
}

export default SearchInput;
