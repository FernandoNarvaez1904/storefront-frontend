import { Group, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface ItemInfoTabFieldProps {
  title: string;
  value: string;
}

function ItemInfoTabField({ title, value }: ItemInfoTabFieldProps) {
  const theme = useMantineTheme();
  const isScreenSM = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  return (
    <Group grow>
      <Text color="dimmed" weight="500" size="sm">
        {title}
      </Text>
      <Text
        size={isScreenSM ? 'md' : 'sm'}
        sx={{
          wordWrap: 'break-word',
        }}
      >
        {value}
      </Text>
    </Group>
  );
}

export default ItemInfoTabField;
