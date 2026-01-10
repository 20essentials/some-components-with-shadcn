import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';

export const metadata = {
  title: 'Data Table'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/data-table-background.svg' />
    </PageContainer>
  );
}
