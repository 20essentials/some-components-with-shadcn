import { PageContainer } from '@/components/myComponents/body';
import { Video } from '@/components/myComponents/video';
import { SliderDemo } from './slider';
import { SliderRangeDemo } from './slider-range';

export const metadata = {
  title: 'Slider'
};

export default function Page() {
  return (
    <PageContainer className='flex-col gap-1.5 place-items-center flex'>
      <Video src='/assets/bg-slider.mp4' />
      <SliderDemo />
      <SliderRangeDemo />
    </PageContainer>
  );
}
