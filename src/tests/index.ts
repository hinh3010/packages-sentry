import { SimpleSentry } from '../core/SimpleSentry'
import * as dotenv from 'dotenv'

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production.env' : 'dev.env'
dotenv.config({ path: NODE_ENV })

const simpleSentry = new SimpleSentry({
  dsn: process.env.DSN,
  enabled: true
})

const main = () => {
  try {
    simpleSentry.captureMessage('Hello, world!')
    console.log('Hello, world!')
    throw new Error('adu')
  } catch (error: any) {
    console.log(error)
    simpleSentry.captureEvent({
      message: 'An event has occurred',
      level: 'info'
    })
    simpleSentry.captureException(error)
  }
}

main()

// ts-node-esm src/tests/index.ts
