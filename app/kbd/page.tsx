import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { KbdDemo } from './demo';

export const metadata = {
  title: 'KBD'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/kbd.svg' />
      <KbdDemo />
    </PageContainer>
  );
}
