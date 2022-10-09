export function toJSONObject(value: any): object {
  return JSON.parse(JSON.stringify(value))
}

export function toJSONString(value: any): string {
  return JSON.stringify(value)
}
