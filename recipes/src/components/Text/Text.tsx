import styles from './Text.module.css'
import cn from 'classnames'
import { TextProps } from './Text.props'
import classNames from 'classnames'

function Text({ children, ...props }: TextProps) {
  return (
    <h2 className={cn(classNames, styles['h2'])} {...props}>
      {children}
    </h2>
  )
}

export default Text
