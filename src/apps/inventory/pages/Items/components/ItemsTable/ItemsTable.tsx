import { ScrollArea, Table } from '@mantine/core';
import { useState } from 'react';
import useItemTableStyles from './ItemTableStyles';

type Props = {
  height: number | string;
};

function ItemsTable({ height }: Props) {
  const { classes, cx } = useItemTableStyles();
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      sx={{ height }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table verticalSpacing="sm" fontSize="sm" highlightOnHover>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Cost</th>
            <th>Markup</th>
            <th>Sell Price</th>
            <th>Is Service</th>
            <th>Is Active</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
          <tr>
            <td>#</td>
            <td>Item Detail with coke pack</td>
            <td>2343</td>
            <td>234.54</td>
            <td>34%</td>
            <td>5678.87</td>
            <td>True</td>
            <td>True</td>
          </tr>
        </tbody>
      </Table>
    </ScrollArea>
  );
}

export default ItemsTable;
