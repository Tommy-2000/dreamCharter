import { FlashList, FlashListProps } from '@shopify/flash-list';
import { Card } from './card';

export default function ListCard({
  style,
  data,
  renderItem,
  children
}: FlashListProps<Object>) {
  return (
    <Card style={style}>
      <FlashList data={data} renderItem={renderItem}>
        {children}
      </FlashList>
    </Card>
  );
}
