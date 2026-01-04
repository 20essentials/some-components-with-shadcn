'use client';

import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function ProgressDemo() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <Progress
      value={progress}
      slideColor={`${cn({
        'bg-amber-300': progress > 0 && progress < 33,
        'bg-orange-400': progress > 33 && progress < 66,
        'bg-green-400': progress > 67
      })}`}
      className={`w-[60%] invert`}
    />
  );
}
