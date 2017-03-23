/**
 * Mocking client-server processing
 */
import _items from './items.json'

const TIMEOUT = 100

export default {
  getItems: (cb, timeout) => setTimeout(() => cb(_items), timeout || TIMEOUT),
  buyItems: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
