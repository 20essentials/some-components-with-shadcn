import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { PaginationDemo } from './demo';

export const metadata = {
  title: 'Pagination'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/pagination.svg' />
      <PaginationDemo />
    </PageContainer>
  );
}
