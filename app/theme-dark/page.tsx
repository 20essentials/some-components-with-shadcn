import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ModeToggle } from './toggledarkdemo';

export const metadata = {
  title: 'Theme Dark'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/theme-bg.svg' />
      <ModeToggle />
    </PageContainer>
  );
}
