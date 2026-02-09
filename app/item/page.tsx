import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ItemHeaderDemo } from './demo';

export const metadata = {
  title: 'Item'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/item.svg' />
      <ItemHeaderDemo />
    </PageContainer>
  );
}
