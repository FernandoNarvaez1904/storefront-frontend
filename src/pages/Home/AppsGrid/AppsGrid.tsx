import {
  ActionIcon,
  Card,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
} from '@mantine/core';
import useAppsGridStyles from 'pages/Home/AppsGrid/AppsGridStyles';
import { Link } from 'react-router-dom';
import allRoutes from 'routing/allRoutes';

function AppsGrid() {
  const { classes } = useAppsGridStyles();

  const items = allRoutes.map((item) => {
    if (!item.hasHomeGridTile) return null;
    return (
      <UnstyledButton
        key={item.title}
        className={classes.item}
        component={Link}
        to={item.path}
      >
        <ActionIcon color={item.color} size="lg" variant="transparent">
          <item.icon width={32} height={32} />
        </ActionIcon>
        <Text size="sm" mt={5} weight={400}>
          {item.title}
        </Text>
      </UnstyledButton>
    );
  });

  return (
    <Card withBorder radius="md" className={classes.card} shadow="lg">
      <Group position="apart">
        <Text className={classes.title}>Select what you want to do</Text>
      </Group>
      <SimpleGrid cols={4} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}

export default AppsGrid;
