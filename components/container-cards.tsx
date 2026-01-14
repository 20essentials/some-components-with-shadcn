import { linksToComponents } from '@/lib/data';
import { Card } from './card';
import './container-cards.css';

export function ContainerCards() {
  return (
    <article className='am-container-cards'>
      {linksToComponents.map(({ title, href }, i) => (
        <Card delay={i} key={i} href={href} username={title} />
      ))}
    </article>
  );
}
