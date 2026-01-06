'use client';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
type SliderProps = React.ComponentProps<typeof Slider>;

const INITIAL_MIN = 20;
const INITIAL_MAX = 60;
export function SliderRangeDemo({ className, ...props }: SliderProps) {
  const [SliderArrayValue, setSliderArrayValue] = useState([
    INITIAL_MIN,
    INITIAL_MAX
  ]);
  const [minValue, maxValue] = SliderArrayValue;

  return (
    <section className='flex gap-1.5 w-[80%] justify-center'>
      <output className='text-blue-950'>Slider min: {minValue}</output>
      <Slider
        defaultValue={SliderArrayValue}
        onValueChange={setSliderArrayValue}
        max={100}
        step={1}
        className={cn('w-[60%]', className)}
        {...props}
      />
      <output className='text-blue-950'>Slider max: {maxValue}</output>
    </section>
  );
}
