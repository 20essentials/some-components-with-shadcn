import { BadgeCheckIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import './badge.css';

export const metadata = {
  title: 'Badge'
};

export default function Page() {
  return (
    <section className='page'>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex w-full flex-wrap gap-2'>
          <Badge>Badge</Badge>
          <Badge variant='secondary'>Secondary</Badge>
          <Badge variant='destructive'>Destructive</Badge>
          <Badge variant='outline'>Outline</Badge>
        </div>
        <div className='flex w-full flex-wrap gap-2'>
          <Badge
            variant='secondary'
            className='bg-blue-500 text-white dark:bg-blue-600'
          >
            <BadgeCheckIcon />
            Verified
          </Badge>
          <Badge className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums'>
            8
          </Badge>
          <Badge
            className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums'
            variant='destructive'
          >
            99
          </Badge>
          <Badge
            className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-amber-200'
            variant='outline'
          >
            20+
          </Badge>
          <Badge
            className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-amber-400'
            variant='destructive'
            capitalize
          >
            capitalize
          </Badge>
        </div>
      </div>
    </section>
  );
}
