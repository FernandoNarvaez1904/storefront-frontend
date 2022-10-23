import styled from '@emotion/styled';
import { Group, Header as HeaderMantine } from '@mantine/core';
import ActionIconsButtonBar from './ActionIconsButtonBar';
import LogoAndSearchBar from './LogoAndSearchBar';

const HeaderLayout = styled(Group)(({ theme }) => ({
  justifyContent: 'space-between',
  height: 66,
  paddingTop: '5px',
  paddingBottom: '5px',
  paddingRight: theme.spacing.sm,
  paddingLeft: theme.spacing.sm,

  borderBottom: `1px solid ${
    theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
  }`,
}));

function Header() {
  return (
    <HeaderMantine height={66}>
      <HeaderLayout>
        <LogoAndSearchBar />
        <ActionIconsButtonBar />
      </HeaderLayout>
    </HeaderMantine>
  );
}

export default Header;
