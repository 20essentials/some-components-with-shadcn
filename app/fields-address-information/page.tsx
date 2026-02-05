import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { FieldFieldset } from './demo';

export const metadata = {
  title: 'Fields Address Information'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/fields-address-information.webp' />
      <section className='p-4 bg-indigo-950 rounded-3xl'>
        <FieldFieldset />
      </section>
    </PageContainer>
  );
}
