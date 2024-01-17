import { setupWorker, rest } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

window.msw = { worker, rest }
