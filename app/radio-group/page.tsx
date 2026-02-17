import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { RadioGroupChoiceCard } from './demo';

export const metadata = {
  title: 'Radio Group'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/radio-group.svg' />
      <RadioGroupChoiceCard />
    </PageContainer>
  );
}
