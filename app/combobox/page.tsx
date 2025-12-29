import { ComboboxDemo } from './demo';
import './mystyles.css';

export const metadata = {
  title: 'Combobox'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/combobox-bg.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg'
      ></video>
      <ComboboxDemo />
    </section>
  );
}
