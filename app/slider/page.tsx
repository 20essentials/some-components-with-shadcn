import { PageContainer } from '@/components/myComponents/body';
import { Video } from '@/components/myComponents/video';
import { SliderDemo } from './slider';

export const metadata = {
  title: 'Slider'
};

export default function Page() {
  return (
    <PageContainer>
      <Video src='/assets/bg-slider.mp4' />
      <SliderDemo />
    </PageContainer>
  );
}
