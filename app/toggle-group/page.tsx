import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { ToggleGroupSpacing } from './demo';

export const metadata: Metadata = {
  title: 'Toggle Group'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/toggle-group.webp' />
      <aside className='p-[1.2vmax] bg-[#000c] rounded-[0.9vmax]'>
        <ToggleGroupSpacing />
      </aside>
    </PageContainer>
  );
}
