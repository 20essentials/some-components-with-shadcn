import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { DropdownMenuCheckboxesIcons } from './demo';

export const metadata = {
  title: 'Dropdown And Checkboxes And Icons'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/dropdown-and-checkboxes-and-icons.svg' />
      <DropdownMenuCheckboxesIcons />
    </PageContainer>
  );
}
