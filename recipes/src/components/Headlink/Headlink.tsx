import styles from './Headlink.module.css'
import cn from 'classnames'
import { HeadlinkProps } from './Headlink.props'
import classNames from 'classnames'

function Headlink({children,...props}: HeadlinkProps){
    return(
        <h1 className={cn(classNames, styles['h1'])}  {...props}>{children}</h1>
    )
}

export default Headlink