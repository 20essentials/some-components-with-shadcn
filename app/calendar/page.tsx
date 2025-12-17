import './calendar.css';
import { ClientComponent } from './CalendarClient';

export const metadata = {
  title: 'Calendar'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/krumzi-video-1.mp4'
        className='am-video'
        autoPlay
        muted
      ></video>
      <ClientComponent />
    </section>
  );
}
