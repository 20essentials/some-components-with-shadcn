'use client';

import gsap from 'gsap';
import './container-cards.css';
import { useEffect } from 'react';
export function ContainerCards() {
  useEffect(() => {
    const speed = 7;
    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });

    const $ticket = document.querySelector('.ticket');
    $ticket.addEventListener('mouseenter', () => {
      r.pause();
      o.pause();
      h.pause();
    });
    $ticket.addEventListener('mouseleave', () => {
      r.play();
      o.play();
      h.play();
    });

    r.to('#app', {
      '--r': '180deg',
      '--p': '0%',
      duration: speed,
      ease: 'sine.in'
    });
    r.to('#app', {
      '--r': '360deg',
      '--p': '100%',
      duration: speed,
      ease: 'sine.out'
    });
    o.to('#app', {
      '--o': 1,
      duration: speed / 2,
      ease: 'power1.in'
    });
    o.to('#app', {
      '--o': 0,
      duration: speed / 2,
      ease: 'power1.out'
    });

    h.to('#app', {
      '--h': '100%',
      duration: speed / 2,
      ease: 'sine.in'
    });
    h.to('#app', {
      '--h': '50%',
      duration: speed / 2,
      ease: 'sine.out'
    });
    h.to('#app', {
      '--h': '0%',
      duration: speed / 2,
      ease: 'sine.in'
    });
    h.to('#app', {
      '--h': '50%',
      duration: speed / 2,
      ease: 'sine.out'
    });
  }, []);

  return (
    <article className='am-container-cards'>
      <main id='app' className='am-card-container'>
        <section className='ticket'>
          <header className='front'>
            <div className='holo' />
            <img
              className='logo'
              src='https://assets.codepen.io/13471/threads.svg'
              alt="The logo for the Application called Threads, an instagram App. It's a '@' symbol but with the tail going in the opposite direction."
            />
            <aside className='divider' />
          </header>
          <section className='back'>
            <div className='holo' />
            <img
              className='logo'
              src='https://assets.codepen.io/13471/threads.svg'
              alt="The logo for the Application called Threads, an instagram App. It's a '@' symbol but with the tail going in the opposite direction."
            />
            <div className='data'>
              <h3>Date</h3>
              <p contentEditable={false} spellCheck='false'>
                Thu Jul 6
              </p>
              <h3>Time</h3>
              <p contentEditable={false} spellCheck='false'>
                07:30 pm
              </p>
              <h3>Username</h3>
              <p contentEditable={false} spellCheck='false'>
                Simeydotme
              </p>
              <a
                className='qr'
                href='https://codepen.io/simeydotme'
                target='_blank'
              >
                <img
                  src='https://assets.codepen.io/13471/simeyqr.svg'
                  alt='A code to use for accessing the simeydotme codepen profile'
                />
              </a>
            </div>
          </section>
        </section>
      </main>
    </article>
  );
}
