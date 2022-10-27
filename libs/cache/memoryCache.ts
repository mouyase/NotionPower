import cache from 'memory-cache'

// const CACHE_TIME = 10 * 1000 * 1000
const CACHE_TIME = 1

export async function getCache(key: string) {
  return await cache.get(key)
}

export async function setCache(key: string, data: any) {
  await cache.put(key, data, CACHE_TIME)
}

export async function delCache(key: string) {
  await cache.del(key)
}

export default { getCache, setCache, delCache }
