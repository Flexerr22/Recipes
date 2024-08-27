import { forwardRef } from 'react'
import styles from './Search.module.css'
import cn from 'classnames'
import { SearchProps } from './Search.props'

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({isValid = false, className, ...props}, ref){
    return(
        <div className={styles['search']}>
            <input ref={ref} className={cn(styles['input'], className,{
                [styles['invalid']]: isValid
            })} {...props}/>
            <img src='/search.svg' className={styles['svg']} alt='Иконка поиска'/>
        </div>
    )
}) 

export default Search