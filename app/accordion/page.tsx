import { AccordionDemo } from '@/components/myComponents/accordion';
import './accordion.css';

export const metadata = {
  title: 'Accordion'
};

export default function Page() {
  return (
    <section className='page'>
      <AccordionDemo />
    </section>
  );
}
