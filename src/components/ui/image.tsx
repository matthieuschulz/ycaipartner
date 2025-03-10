'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'

interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string
  className?: string
}

export function Image({ 
  alt, 
  className, 
  style, 
  ...props 
}: ImageProps) {
  return (
    <NextImage
      className={cn('transition-all', className)}
      alt={alt}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...style,
      }}
      {...props}
    />
  )
} 