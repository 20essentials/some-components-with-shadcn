import { PageContainer } from '@/components/myComponents/body';
import { Metadata } from 'next';
import { Sidebar } from './demo';

export const metadata: Metadata = {
  title: 'Sidebar Notion'
};

export default function Page() {
  return (
    <PageContainer>
      <Sidebar />
    </PageContainer>
  );
}
