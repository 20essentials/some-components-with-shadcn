import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function TextareaButton() {
  return (
    <div className="grid w-full gap-2 max-w-[50vmin] p-4 bg-black/80 rounded-2xl">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
