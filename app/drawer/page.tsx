import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { DrawerDemo } from './drawer-demo';

export const metadata = {
  title: 'Drawer'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/drawer.svg' />
      <DrawerDemo />
    </PageContainer>
  );
}
