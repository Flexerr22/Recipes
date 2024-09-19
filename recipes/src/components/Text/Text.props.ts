import { HTMLAttributes, ReactNode } from 'react'

export interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}
