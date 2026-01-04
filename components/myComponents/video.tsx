import { ComponentProps } from 'react';

export function Video(props?: ComponentProps<'video'>) {
  return (
    <video
      autoPlay
      muted
      loop
      className={`am-video-bg ${props?.className}`}
      {...props}
    ></video>
  );
}
