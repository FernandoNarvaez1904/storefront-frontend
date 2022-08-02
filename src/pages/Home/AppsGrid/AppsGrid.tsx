import { Card, Group, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import useAppsGridStyles from 'pages/Home/AppsGrid/AppsGridStyles';
import { Link } from 'react-router-dom';
import allRoutes from 'routing/allRoutes';

function AppsGrid() {
  const { classes, theme } = useAppsGridStyles();

  const items = allRoutes.map((item) => (
    <UnstyledButton
      key={item.title}
      className={classes.item}
      component={Link}
      to={item.path}
    >
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

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
