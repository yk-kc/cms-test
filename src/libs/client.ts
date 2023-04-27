import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'service-domain',
  apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY!,
})
