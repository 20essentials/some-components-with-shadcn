import { AlertDialogDemo } from '@/app/alert-dialog/alert-dialog';
import './alert-dialog.css';

export const metadata = {
  title: 'Alert Dialog'
};

export default function Page() {
  return (
    <section className='page'>
      <AlertDialogDemo />
    </section>
  );
}
