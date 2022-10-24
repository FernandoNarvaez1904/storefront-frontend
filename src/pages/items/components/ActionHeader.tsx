import { Breadcrumbs, Group, Text, UnstyledButton } from '@mantine/core';

function ActionHeader() {
  return (
    <Group>
      <Breadcrumbs
        separator={
          <Text weight={500} size="md">
            /
          </Text>
        }
      >
        <UnstyledButton sx={{ textAlign: 'end' }}>
          <Text size="xl" weight={500}>
            Items
          </Text>
        </UnstyledButton>

        <UnstyledButton>
          <Text size="xl" weight={600}>
            Group
          </Text>
        </UnstyledButton>
      </Breadcrumbs>
    </Group>
  );
}

export default ActionHeader;
