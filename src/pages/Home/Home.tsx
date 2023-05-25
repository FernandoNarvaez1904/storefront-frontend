import { Box, Center } from '@mantine/core';
import useHomeStyles from 'pages/Home/HomeStyles';
import AppsGrid from './AppsGrid';

function Home() {
  const { classes } = useHomeStyles();

  return (
    <Center className={classes.root}>
      <Box className={classes.allGridRoot}>
        <AppsGrid />
      </Box>
    </Center>
  );
}

export default Home;
