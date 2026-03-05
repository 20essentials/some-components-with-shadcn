"use client";
import { useState } from "react"
import { Toggle } from "@/components/ui/toggle"
import { BookmarkIcon } from "lucide-react"

export function ToggleDemo() {
  const [on, setOn] = useState(false)

  return (
    <Toggle
      aria-label="Toggle bookmark"
      size="sm"
      variant="outline"
      pressed={on}
      onPressedChange={setOn}
      className="flex items-center gap-2"
    >
      <BookmarkIcon
        className="h-4 w-4 transition-colors"
        fill={on ? "currentColor" : "none"} 
        stroke="currentColor"
      />
      Bookmark
    </Toggle>
  )
}