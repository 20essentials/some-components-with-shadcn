import './badge.css';
import { AvatarDemo } from './AvatarDemo';

export const metadata = {
  title: 'Badge'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        className='am-video'
        src='/assets/background-avatar.mp4'
        autoPlay
        muted
        loop
      ></video>
      <AvatarDemo />
    </section>
  );
}
