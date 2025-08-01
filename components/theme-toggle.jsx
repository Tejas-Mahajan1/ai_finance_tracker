"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const themes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ]

  const currentIndex = themes.findIndex(t => t.value === theme)
  const nextTheme = themes[(currentIndex + 1) % themes.length]

  const handleClick = () => {
    setTheme(nextTheme.value)
  }

  const CurrentIcon = themes[currentIndex].icon

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-9 w-9 relative overflow-hidden group"
      onClick={handleClick}
      title={`Current: ${themes[currentIndex].label}. Click for ${nextTheme.label}`}
    >
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <CurrentIcon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      </div>
      
      {/* Slider indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 