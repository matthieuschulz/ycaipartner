import { getPartnerById } from '@/data/partners'
import { PartnerCard } from '@/components/ui/partner-card'
import { Suspense } from 'react'

interface PartnerDataProps {
  partnerId: string
}

async function PartnerDataFetcher({ partnerId }: PartnerDataProps) {
  // In a real app, this would be a database or API call
  // For now, we're using the imported function
  const partner = getPartnerById(partnerId)
  
  if (!partner) {
    return <div>Partner not found</div>
  }
  
  return <PartnerCard partner={partner} />
}

export function PartnerData(props: PartnerDataProps) {
  return (
    <Suspense fallback={<div>Loading partner data...</div>}>
      <PartnerDataFetcher {...props} />
    </Suspense>
  )
} 