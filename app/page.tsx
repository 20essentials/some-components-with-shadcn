import Link from 'next/link';

const linksToComponents = [
  { title: 'Accordion' , href: 'accordion'},
  { title: 'Alert Dialog' , href: 'alert-dialog'},
  { title: 'Buttons' , href: 'buttons'},
];

export default function Home() {
  return (
    <nav className='am-navbar'>
      {linksToComponents.map(({ title }, i) => (
        <Link key={i} href={title} className='am-link'>
          {title}
        </Link>
      ))}
    </nav>
  );
}
