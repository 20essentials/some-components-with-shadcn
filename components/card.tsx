/* eslint-disable react-hooks/purity */
'use client';
import Link from 'next/link';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

interface CardProps {
  username: string;
  href: string;
}

export function CardLocal({ username, href }: CardProps) {
  const appRef = useRef<HTMLDivElement>(null);
  const ticketRef = useRef<HTMLElement>(null);

  const randomDate = () => {
    const start = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 30);
    const d = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return d.toDateString().slice(0, 10);
  };

  const randomTime = () => {
    const hour = Math.floor(Math.random() * 12) + 1;
    const minute = Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0');
    const ampm = Math.random() > 0.5 ? 'am' : 'pm';
    return `${hour}:${minute} ${ampm}`;
  };

  useGSAP(() => {
    if (!appRef.current) return;

    const speed = 7;

    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });

    const handleMouseEnter = () => {
      r.pause();
      o.pause();
      h.pause();
    };
    const handleMouseLeave = () => {
      r.play();
      o.play();
      h.play();
    };

    const ticketEl = ticketRef.current;
    ticketEl?.addEventListener('mouseenter', handleMouseEnter);
    ticketEl?.addEventListener('mouseleave', handleMouseLeave);

    r.to(appRef.current, {
      '--r': '180deg',
      '--p': '0%',
      duration: speed,
      ease: 'sine.in'
    });
    r.to(appRef.current, {
      '--r': '360deg',
      '--p': '100%',
      duration: speed,
      ease: 'sine.out'
    });

    o.to(appRef.current, { '--o': 1, duration: speed / 2, ease: 'power1.in' });
    o.to(appRef.current, { '--o': 0, duration: speed / 2, ease: 'power1.out' });

    h.to(appRef.current, { '--h': '100%', duration: speed / 2, ease: 'sine.in' });
    h.to(appRef.current, { '--h': '50%', duration: speed / 2, ease: 'sine.out' });
    h.to(appRef.current, { '--h': '0%', duration: speed / 2, ease: 'sine.in' });
    h.to(appRef.current, { '--h': '50%', duration: speed / 2, ease: 'sine.out' });

    return () => {
      r.kill();
      o.kill();
      h.kill();
      ticketEl?.removeEventListener('mouseenter', handleMouseEnter);
      ticketEl?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <main ref={appRef} id='app' className='am-card-container'>
      <section ref={ticketRef} className='ticket'>
        <header className='front'>
          <div className='holo' />
          <img
            className='logo'
            src='https://assets.codepen.io/13471/threads.svg'
            alt='Threads logo'
          />
          <aside className='divider' />
        </header>
        <section className='back'>
          <div className='holo' />
          <img
            className='logo'
            src='https://assets.codepen.io/13471/threads.svg'
            alt='Threads logo'
          />
          <div className='data'>
            <h3>Date</h3>
            <p contentEditable={false} spellCheck={false}>
              {randomDate()}
            </p>
            <h3>Time</h3>
            <p contentEditable={false} spellCheck={false}>
              {randomTime()}
            </p>
            <h3>Username</h3>
            <p contentEditable={false} spellCheck={false}>
              {username}
            </p>
            <a
              className='qr contrast-200'
              href={'https://github.com/20essentials'}
              target='_blank'
              rel='noreferrer'
            >
              <img src='/assets/qr.png' alt='QR code to access codepen profile' />
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export const Card = dynamic(async () => CardLocal, { ssr: false });
