'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import './mystyles.css';
import { useRef } from 'react';

export default function Page() {
  const plugin = useRef(Autoplay({ delay: 2000 }));

  return (
    <section className='page'>
      <video
        src='/assets/background-carousel-vertical.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg'
      ></video>
      <Carousel
        opts={{
          align: 'start'
        }}
        plugins={[plugin.current]}
        orientation='vertical'
        className='w-full max-w-xs select-none'
      >
        <CarouselContent className='-mt-1 h-[200px]'>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='pt-1 md:basis-1/2'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex items-center justify-center p-6'>
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
