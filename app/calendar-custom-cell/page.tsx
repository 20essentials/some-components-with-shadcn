import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { CalendarCustomDays } from './calendar-demo';

export const metadata = {
  title: ''
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/calendar-custom-cell-bg.svg' />
      <CalendarCustomDays />
    </PageContainer>
  );
}
