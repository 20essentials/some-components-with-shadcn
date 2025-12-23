import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import './mystyles.css';

export const metadata = {
  title: 'Carousel 1x1'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/background-carousel-1.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg'
      ></video>
      <Carousel className='w-full max-w-xs select-none' opts={{
        loop: true
      }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
