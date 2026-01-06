import { Skeleton } from '@/components/ui/skeleton';

export default function CardsSkeleton() {
  return (
    <aside className='grid grid-cols-5 p-[1.4vmax] gap-[1.4vmax]'>
      {Array.from({ length: 20 }).map((_, i) => (
        <section key={i} className='aspect-square min-w-[18.1vmax] min-h-[18.1vmax]'>
          <Skeleton className='object-cover w-full h-full' />
        </section>
      ))}
    </aside>
  );
}
