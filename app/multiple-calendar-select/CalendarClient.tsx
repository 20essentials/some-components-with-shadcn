'use client';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle
} from '@/components/ui/item';
import { BadgeCheckIcon } from 'lucide-react';

export function ClientComponent() {
  'use client';
  const [dates, setDate] = useState<Date[] | undefined>([]);

  return (
    <section className=' flex flex-col gap-7 place-content-center place-items-center'>
      <Calendar
        mode='multiple'
        selected={dates}
        onSelect={setDate}
        className='rounded-md border shadow-sm'
        captionLayout='dropdown'
        disabled={day => {
          const isSunday = day.getDay() === 0;
          const isSaturday = day.getDay() === 6;
          // const theDayIsLowerThanToday =  day < new Date();
          return isSunday || isSaturday;
        }}
      />
      <Item variant='outline' size='sm' asChild className='flex flex-col'>
        <a href='#'>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>You has selected: </ItemTitle>
          </ItemContent>
          <ItemActions className='flex flex-col'>
            {dates?.map((date, i) => (
              <aside key={i} className='flex'>
                {date?.toLocaleDateString('en-EN', {
                  month: 'long',
                  weekday: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </aside>
            ))}
          </ItemActions>
        </a>
      </Item>
    </section>
  );
}
