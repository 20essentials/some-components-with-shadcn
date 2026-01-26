import { PageContainer } from '@/components/myComponents/body';
import { ImageBackground } from '@/components/myComponents/image-background';
import { CollapsibleFileTree } from './collapsible';

export const metadata = {
  title: 'Collapsible File Tree'
};

export default function Page() {
  return (
    <PageContainer>
      <ImageBackground src='/assets/collapsible-file-tree.avif' />
      <CollapsibleFileTree />
    </PageContainer>
  );
}
