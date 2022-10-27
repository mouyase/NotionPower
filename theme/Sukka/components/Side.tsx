import React, { ReactNode } from 'react'
import { getChildren } from '../../../libs/common/utils'

interface IProps {
  className?: string
  children?: ReactNode[] | ReactNode
}

const Side: React.FC<IProps> = (props: IProps) => {
  const { children: originChildren, className } = props
  const children = getChildren(originChildren)
  return (
    <div className={className}>
      <div className="flex w-full flex-col">
        {children?.map((item, index) => (
          <div
            key={index}
            className={`${index !== children?.length ? 'mb-5' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Side
