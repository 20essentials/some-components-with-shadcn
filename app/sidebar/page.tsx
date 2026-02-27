import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { Metadata } from 'next';
import { Sidebar } from './demo';

export const metadata: Metadata = {
  title: 'Sidebar'
};

export default function Page() {
  return (
    <PageContainer>
      <Sidebar />
    </PageContainer>
  );
}
