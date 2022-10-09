import FileCache from './fileCache'
import MemoryCache from './memoryCache'

let cache: {
  getCache: (key: string) => any
  setCache: (key: string, value: any) => void
  delCache: (key: string) => void
}

if (process.env.ENABLE_FILE_CACHE) {
  cache = FileCache
} else {
  cache = MemoryCache
}

export default {
  get(key: string) {
    return cache.getCache(key)
  },
  set(key: string, value: any) {
    return cache.setCache(key, value)
  },
  del(key: string) {
    return cache.delCache(key)
  }
}
