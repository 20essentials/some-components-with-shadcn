'use client';

import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Monitor, Phone } from 'lucide-react';

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 }
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
    icon: Monitor,

  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
    icon: Phone
  }
} satisfies ChartConfig;

export function ChartExample() {
  return (
    <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={true}
          tickMargin={10}
          axisLine={true}
          tickFormatter={value => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
        <Bar  dataKey='mobile' fill='var(--color-mobile)' radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
