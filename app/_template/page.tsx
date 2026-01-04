import { PageContainer } from '@/components/myComponents/body';
import { Video } from '@/components/myComponents/video';

export const metadata = {
  title: ''
};

export default function Page() {
  return (
    <PageContainer>
      <Video src='/assets/.mp4' />
    </PageContainer>
  );
}
