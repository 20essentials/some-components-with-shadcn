import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { FieldDemo } from './demo';

export const metadata = {
  title: 'Payment Method Fields'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/payment-method-fields.webp' />
      <FieldDemo />
    </PageContainer>
  );
}
