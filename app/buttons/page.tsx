import { ButtonDemo } from '@/app/buttons/button';
import './button.css';
import { ButtonOutline } from './outline/button';
import { ButtonSecondary } from './secondary/button';
import { ButtonGhost } from './ghost/button';
import { ButtonDestructive } from './destructive/button';
import { ButtonLink } from './link/button';
import { ButtonIcon } from './icon/button';
import { ButtonWithIcon } from './withIcon/button';
import { ButtonRounded } from './rounded/button';
import { ButtonLoading } from './spinner/button';
import { ButtonGroupDemo } from './group/button';
import { LinkAsButton } from './buttonLink/button';

export const metadata = {
  title: 'Button'
};

export default function Page() {
  return (
    <section className='page grid gap-1.5'>
      <ButtonDemo />
      <ButtonOutline />
      <ButtonSecondary />
      <ButtonGhost />
      <ButtonDestructive />
      <ButtonLink />
      <ButtonIcon />
      <ButtonWithIcon />
      <ButtonRounded />
      <ButtonLoading />
      <ButtonGroupDemo />
      <LinkAsButton />
    </section>
  );
}
