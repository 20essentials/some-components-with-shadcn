import { Video } from '@/components/myComponents/video';
import { ProgressDemo } from './demo';

export const metadata = {
  title: 'Progress'
};

export default function Page() {
  return (
    <section className='min-h-screen w-full flex flex-wrap place-content-center overflow-hidden bg-cover bg-center cursor-pointer invert'>
      <Video src='/assets/bg-progress.mp4' />
      <ProgressDemo />
    </section>
  );
}
