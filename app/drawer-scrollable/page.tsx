import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { DrawerScrollableContent } from './drawer-scrollable-demo';

export const metadata = {
  title: 'Drawer Scrollable'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/drawer-scrollable.svg' />
      <DrawerScrollableContent />
    </PageContainer>
  );
}
