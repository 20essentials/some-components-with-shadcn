import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { DropdownMenuAvatar } from './demo';

export const metadata = {
  title: 'Dropdown Avatar'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/dropdown-avatar.svg' />
      <DropdownMenuAvatar />
    </PageContainer>
  );
}
