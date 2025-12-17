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
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className=' flex flex-col gap-7 place-content-center place-items-center'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border shadow-sm'
        captionLayout='dropdown'
      />
      <Item variant='outline' size='sm' asChild>
        <a href='#'>
          <ItemMedia>
            <BadgeCheckIcon className='size-5' />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>You has selected: </ItemTitle>
          </ItemContent>
          <ItemActions>
           {
            date?.toLocaleDateString('en-EN', {
              month: 'long',
              weekday: 'long',
              day: 'numeric',
              year: 'numeric'
            })
           }
          </ItemActions>
        </a>
      </Item>
    </section>
  );
}
