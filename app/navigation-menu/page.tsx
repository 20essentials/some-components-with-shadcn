import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { NavigationMenuDemo } from './demo';

export const metadata = {
  title: 'Navigation Menu'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground
        src='/assets/navigation-menu.svg'
        className='bg-gray-800'
      />
      <NavigationMenuDemo />
    </PageContainer>
  );
}
