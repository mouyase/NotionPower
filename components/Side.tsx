import React, { ReactNode } from 'react'

interface IProps {
  className?: string
  children?: ReactNode[] | ReactNode
}

const Side: React.FC<IProps> = (props: IProps) => {
  const { children, className } = props
  return (
    <div className={className}>
      <div className="flex w-full flex-col">
        {children instanceof Array
          ? children?.map((item, index) => (
              <div
                key={index}
                className={`${index !== children?.length ? 'mb-5' : ''}`}
              >
                {item}
              </div>
            ))
          : children}
      </div>
    </div>
  )
}
export default Side
