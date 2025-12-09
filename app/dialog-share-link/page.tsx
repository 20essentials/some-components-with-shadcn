import { DialogCloseButton } from '@/app/dialog-share-link/dialog-clipboard';
import './dialog-clipboard.css';

export const metadata = {
  title: 'Dialog Share'
};

export default function Page() {
  return (
    <section className='page'>
      <DialogCloseButton />
    </section>
  );
}
