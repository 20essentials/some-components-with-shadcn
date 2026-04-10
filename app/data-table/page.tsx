import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { payments } from '@/app/data-table/data/payments.data';
import { columns } from './columns';
import { DataTableClient } from './data-table-client';

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
      <ImageBackground
        src='/assets/data-table-background.svg'
        className='invert-25'
      />
      <DataTableClient columns={columns} data={data} />
    </PageContainer>
  );
}
