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
