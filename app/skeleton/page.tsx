import { PageContainer } from '@/components/myComponents/body';
import { Video } from '@/components/myComponents/video';
import { Suspense } from 'react';
import CardsContainer from './cards-container';
import CardsSkeleton from './cards-skeleton';

export const metadata = {
  title: 'Skeleton'
};

export default function Page() {
  return (
    <PageContainer>
      <Video src='/assets/skeleton-bg.mp4' />
      <Suspense fallback={<CardsSkeleton />}>
        <CardsContainer />
      </Suspense>
    </PageContainer>
  );
}
