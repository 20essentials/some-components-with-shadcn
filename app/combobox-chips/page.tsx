import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { ComboboxMultiple } from './combobox-demo';

export const metadata = {
  title: 'Combobox Chips'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/combobox-chips.avif' />
      <ComboboxMultiple />
    </PageContainer>
  );
}
