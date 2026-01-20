import { PageContainer } from '@/components/myComponents/body';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { ImageBackground } from '@/components/myComponents/image-background';

export const metadata = {
  title: 'Button Group'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/button-group-background.svg' />
      <ButtonGroup>
        <Input placeholder='Search...' className='bg-gray-100' />
        <Button variant='secondary' aria-label='Search'>
          <SearchIcon />
        </Button>
      </ButtonGroup>
    </PageContainer>
  );
}
