import { ReactNode } from 'react'

export function toJSONObject(value: any): object {
  return JSON.parse(JSON.stringify(value))
}

export function toJSONString(value: any): string {
  return JSON.stringify(value)
}

export function getReactChildren(children: ReactNode[] | ReactNode) {
  const newChildren = []
  if (children instanceof Array) {
    newChildren.push([...children])
  } else {
    newChildren.push(children)
  }
  return newChildren
}
