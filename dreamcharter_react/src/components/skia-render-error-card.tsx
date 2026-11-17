import { Card } from './card';
import { TextCard } from './text-card';

export interface SkiaRenderErrorProps {
  error: string;
}

export default function SkiaRenderErrorCard({ error }: SkiaRenderErrorProps) {
  return (
    <Card>
      <TextCard>{error}</TextCard>
    </Card>
  );
}
