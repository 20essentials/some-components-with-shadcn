import Link from "next/link"

import { Button } from "@/components/ui/button"

export function LinkAsButton() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}