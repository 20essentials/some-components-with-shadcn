import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { TextareaButton } from './demo';

export const metadata: Metadata = {
  title: 'Textarea'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/textarea.svg' />
      <TextareaButton />
    </PageContainer>
  );
}
