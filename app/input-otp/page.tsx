import './mystyles.css';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';

export const metadata = {
  title: 'Input OTP'
};

export default function Page() {
  return (
    <section className='page'>
      <video
        src='/assets/input-otp-bg.mp4'
        autoPlay
        muted
        loop
        className='am-video-bg invert'
      ></video>
      <InputOTP maxLength={6} >
        <InputOTPGroup >
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </section>
  );
}
