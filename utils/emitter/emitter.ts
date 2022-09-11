import mitt from 'mitt'
import { navigationEvent } from './events'

type EventsRecord = {
  [navigationEvent.changeTheme]: 'primary' | 'negative' | 'section-primary'
}

const emitter = mitt<EventsRecord>()

export { emitter }
