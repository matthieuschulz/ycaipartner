'use client'

import NextScript, { ScriptProps as NextScriptProps } from 'next/script'

interface ScriptProps extends NextScriptProps {
  src: string
}

export function Script({ src, strategy = 'afterInteractive', ...props }: ScriptProps) {
  return (
    <NextScript
      src={src}
      strategy={strategy}
      {...props}
    />
  )
} 