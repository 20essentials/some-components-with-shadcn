import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { TabsDemo } from './tabs-demo';

export const metadata = {
  title: 'Tabs'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/tabs-bg.svg' />
      <TabsDemo />
    </PageContainer>
  );
}
