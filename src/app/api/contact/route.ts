import { NextResponse } from 'next/server'

interface ContactPayload {
  firstName?: string
  lastName?: string
  email?: string
  company?: string
  interest?: string
  referral?: string
  message?: string
}

export async function POST(request: Request) {
  let body: ContactPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  if (!body.email || !body.message) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 422 })
  }

  // TODO: wire to Resend / SendGrid / inbox forwarder. For now, log on the
  // server so submissions are captured in deployment logs instead of dropped.
  console.info('[contact] new submission', {
    email: body.email,
    name: `${body.firstName ?? ''} ${body.lastName ?? ''}`.trim(),
    interest: body.interest,
  })

  return NextResponse.json({ ok: true })
}
