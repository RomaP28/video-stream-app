import { db } from '@/lib/db'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'


export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    const eventType = evt.type
    // console.log('Webhook payload:', evt.data)

    if(eventType === 'user.created') {
        await db.user.create({
          data: {
            externalUserId: evt.data.id,
            username: evt.data.username || '',
            imageUrl: evt.data.image_url,
          }
        })
    }

    if(eventType === 'user.updated') {
      await db.user.update({
        where: {
          externalUserId: evt.data.id,
        },
        data: {
          username: evt.data.username || '',
          imageUrl: evt.data.image_url,
        }
      })
    }

    if(eventType === 'user.deleted') {
      await db.user.delete({
        where: {
          externalUserId: evt.data.id,
        },
      });
    }


    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}