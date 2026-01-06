import fs from 'fs';
import path from 'path';

export default async function CardsContainer() {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  const videosDir = path.join(process.cwd(), 'public/assets');

  const videos = fs
    .readdirSync(videosDir)
    .filter(file => file.endsWith('.mp4'))
    .map(file => `/assets/${file}`);

  return (
    <aside className='grid grid-cols-5 p-[1.4vmax] gap-[1.4vmax]'>
      {videos.map((src, i) => (
        <section key={i} className='aspect-square'>
          <video src={src} controls className='object-cover w-full h-full' />
        </section>
      ))}
    </aside>
  );
}
