import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { KbdTooltip } from './demo';

export const metadata = {
  title: 'KBD Tooltip'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/kdb-tooltip.svg' />
      <KbdTooltip />
    </PageContainer>
  );
}
