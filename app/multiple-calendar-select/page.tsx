import './calendar.css';
import { ClientComponent } from './CalendarClient';

export const metadata = {
  title: 'Multiple Calendar'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/krumzi-video-2.mp4'
        className='am-video'
        autoPlay
        muted
        loop
      ></video>
      <ClientComponent />
    </section>
  );
}
