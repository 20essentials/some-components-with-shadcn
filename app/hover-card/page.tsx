import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { HoverCardSides } from './demo';

export const metadata = {
  title: 'Hover Card'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/hover-card.jpg' />
      <HoverCardSides />
    </PageContainer>
  );
}
