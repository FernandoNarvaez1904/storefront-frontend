import { Center } from '@mantine/core';
import { TablerIcon } from '@tabler/icons';
import { Link } from 'react-router-dom';
import SidebarIconButton, {
  SidebarIconButtonIconWrapper,
} from './SidebarIconButton';

interface SidebarButtonLinkProps {
  icon: TablerIcon;
  path: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

function SidebarButtonLink({
  title,
  path,
  icon,
  isActive,
  onClick,
}: SidebarButtonLinkProps) {
  const Icon = icon;

  return (
    <SidebarIconButton
      component={Link}
      to={path}
      onClick={onClick}
      isActive={isActive}
    >
      <SidebarIconButtonIconWrapper>
        <Center>
          <Icon stroke={1.5} />
        </Center>
      </SidebarIconButtonIconWrapper>
      <span>{title}</span>
    </SidebarIconButton>
  );
}

export default SidebarButtonLink;
