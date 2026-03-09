import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { TooltipSides } from './demo';

export const metadata: Metadata = {
  title: 'Tooltip'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/tooltip.avif' />
      <TooltipSides />
    </PageContainer>
  );
}
