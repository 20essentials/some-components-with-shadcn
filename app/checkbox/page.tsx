import './mystyles.css';

export const metadata = {
  title: ''
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/background-checkbox.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg'
      ></video>
    </section>
  );
}
