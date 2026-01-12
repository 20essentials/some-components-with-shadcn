'use client';
import { DataTable } from './data-table';
import dynamic from 'next/dynamic';
import { type ColumnDef } from '@tanstack/react-table';
import { Payment } from './data/payments.data';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function DataTableClient_<TData, TValue>({
  columns,
  data
}: DataTableProps<Payment, TValue>) {
  return <DataTable columns={columns} data={data} />;
}
export const DataTableClient = dynamic(async () => DataTableClient_, {
  ssr: false
});
