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
  title: 'Carousel 1x5'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/background-carousel-1x5.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg'
      ></video>
      <Carousel
        opts={{
          align: 'start'
        }}
        className='w-full max-w-sm select-none'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
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
