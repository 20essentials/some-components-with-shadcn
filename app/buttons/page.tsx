import { ButtonDemo } from '@/app/buttons/button';
import './button.css';
import { ButtonOutline } from './outline/button';
import { ButtonSecondary } from './secondary/button';
import { ButtonGhost } from './ghost/button';

export const metadata = {
  title: 'Button'
};

export default function Page() {
  return (
    <section className='page'>
      <ButtonDemo />
      <ButtonOutline />
      <ButtonSecondary />
      <ButtonGhost />
    </section>
  );
}
