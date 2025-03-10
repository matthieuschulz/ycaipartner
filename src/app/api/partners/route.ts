import { getRecommendedPartners, getPartnerById } from '@/data/partners'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const businessType = searchParams.get('businessType')
  const partnerId = searchParams.get('partnerId')
  
  if (partnerId) {
    const partner = getPartnerById(partnerId)
    if (!partner) {
      return NextResponse.json({ error: 'Partner not found' }, { status: 404 })
    }
    return NextResponse.json(partner)
  }
  
  if (businessType) {
    const partners = getRecommendedPartners(businessType)
    return NextResponse.json(partners)
  }
  
  return NextResponse.json({ error: 'Missing businessType or partnerId parameter' }, { status: 400 })
} 