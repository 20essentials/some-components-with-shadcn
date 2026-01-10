import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { payments } from '@/app/data-table/data/payments.data';
import { DataTable } from './data-table';
import { columns } from './columns';

async function fetchData() {
  return payments;
}

export const metadata = {
  title: 'Data Table'
};

export default async function Page() {
  const data = await fetchData();

  return (
    <PageContainer>
      <ImageBackground src='/assets/data-table-background.svg' className='invert-25' />
      <DataTable columns={columns} data={data} />
    </PageContainer>
  );
}
