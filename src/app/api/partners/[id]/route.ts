import { getPartnerById } from '@/data/partners'
import { NextRequest, NextResponse } from 'next/server'

interface RouteParams {
  params: {
    id: string
  }
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  const partner = getPartnerById(params.id)
  
  if (!partner) {
    return NextResponse.json({ error: 'Partner not found' }, { status: 404 })
  }
  
  return NextResponse.json(partner)
} 