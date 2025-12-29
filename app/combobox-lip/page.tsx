import { ComboboxPopover } from './demo';
import './mystyles.css';

export const metadata = {
  title: 'Combobox LIp'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/combobox-lip-bg.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg'
      ></video>
      <ComboboxPopover />
    </section>
  );
}
