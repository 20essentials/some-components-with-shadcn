import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { DropdownMenuComplex } from './demo';

export const metadata = {
  title: 'Dropdown Complex'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/dropdown-complex.svg' />
      <DropdownMenuComplex />
    </PageContainer>
  );
}
