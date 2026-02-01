import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { DropdownMenuDemo } from './dropdown-demo';

export const metadata = {
  title: 'Dropdown Menu'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/dropdown-menu.svg' />
      <DropdownMenuDemo />
    </PageContainer>
  );
}
