'use client';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

type SliderProps = React.ComponentProps<typeof Slider>;

export function SliderDemo({ className, ...props }: SliderProps) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <section className='flex gap-1.5 w-[80%] justify-center'>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={arrayValue => setSliderValue(arrayValue[0])}
        max={100}
        step={1}
        className={cn('w-[60%]', className)}
        {...props}
      />
      <output className='text-blue-950'>Slider Value: {sliderValue}</output>
    </section>
  );
}
