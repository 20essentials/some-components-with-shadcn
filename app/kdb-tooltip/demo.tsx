import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export function KbdTooltip() {
  return (
    <div className='flex flex-wrap gap-4'>
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline'>Save</Button>
          </TooltipTrigger>
          <TooltipContent className='pr-1.5'>
            <div className='flex items-center gap-2'>
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant='outline'>Print</Button>
          </TooltipTrigger>
          <TooltipContent className='pr-1.5'>
            <div className='flex items-center gap-2'>
              Print Document{' '}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}
