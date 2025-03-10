'use client'

import { PartnerData } from '@/data/partners'
import { Image } from './image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card'

interface PartnerCardProps {
  partner: PartnerData
}

export function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <CardTitle>{partner.name}</CardTitle>
        <CardDescription>{partner.role}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full">
            <Image
              src={partner.photo}
              alt={partner.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div>
            <p className="text-sm">{partner.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 