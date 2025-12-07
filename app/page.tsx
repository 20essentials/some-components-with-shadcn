import Link from 'next/link';

const linksToComponents = [{ title: 'accordion' }];

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
