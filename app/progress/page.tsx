import { Video } from '@/components/myComponents/video';

export const metadata = {
  title: ''
};

export default function Page() {
  return (
    <section className='min-h-screen w-full flex flex-wrap place-content-center overflow-hidden bg-cover bg-center cursor-pointer'>
      <Video src='/assets/.mp4' />
    </section>
  );
}
