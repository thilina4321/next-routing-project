import {useRouter} from 'next/router'
import classes from './button.module.css'

const Button = (props) => {
    const router = useRouter()
    const {page} = props

    const nextPage = ()=>{
        router.push(page)
    }

    return (
        <div>
            <button className={classes.btn} onClick={nextPage} type="button"> Explore More  </button>
        </div>
    )
}

export default Button
