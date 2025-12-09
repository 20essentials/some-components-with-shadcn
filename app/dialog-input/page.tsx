import { DialogDemo } from '@/app/dialog-input/dialog-input';
import './dialog-input.css';

export const metadata = {
  title: 'Dialog Input'
};

export default function Page() {
  return (
    <section className='page'>
      <DialogDemo />
    </section>
  );
}
