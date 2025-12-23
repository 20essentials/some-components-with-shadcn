import Link from 'next/link';

const linksToComponents = [
  { title: 'Accordion' , href: 'accordion'},
  { title: 'Alert Dialog' , href: 'alert-dialog'},
  { title: 'Buttons' , href: 'buttons'},
  { title: 'Dialog Share Link' , href: 'dialog-share-link'},
  { title: 'Dialog Input' , href: 'dialog-input'},
  { title: 'Badge' , href: 'badge'},
  { title: 'Simple Login Form' , href: 'simple-login-form'},
  { title: 'Calendar' , href: 'calendar'},
  { title: 'Multiple Calendar Select' , href: 'multiple-calendar-select'},
  { title: 'Avatar' , href: 'avatar'},
  { title: 'Card Login' , href: 'card-login'},
  { title: 'Carousel 1x1' , href: 'carousel-1x1'},
  { title: 'Carousel 1x5' , href: 'carousel-1x5'},
  { title: 'Carousel Vertical' , href: 'carousel-vertical'},
];

export default function Home() {
  return (
    <nav className='am-navbar'>
      {linksToComponents.map(({ title, href }, i) => (
        <Link key={i} href={href} className='am-link'>
          {title}
        </Link>
      ))}
    </nav>
  );
}
