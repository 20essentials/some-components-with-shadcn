import { PageContainer } from '@/components/myComponents/body';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from '@/components/ui/empty';
import { IconCloud } from '@tabler/icons-react';
import { ImageBackground } from '@/components/myComponents/image-background';

export const metadata = {
  title: 'Empty Box'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/empty-box.svg' />

      <section className='w-fit bg-[#fff3]'>
        <Empty className='border border-dashed border-black'>
          <EmptyHeader>
            <EmptyMedia variant='icon'>
              <IconCloud />
            </EmptyMedia>
            <EmptyTitle>Cloud Storage Empty</EmptyTitle>
            <EmptyDescription>
              Upload files to your cloud storage to access them anywhere.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant='secondary' size='sm'>
              Upload Files
            </Button>
          </EmptyContent>
        </Empty>
      </section>
    </PageContainer>
  );
}
