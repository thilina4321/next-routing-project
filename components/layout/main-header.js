import Link from 'next/link'
import classes from './main-header.module.css'

const Header = () => {
    return (
        <header className={classes.header} >
            <div className={classes.logo} > <Link href="/"> NextEvent </Link> </div>
            <nav>
                <ul className={classes.ul} >
                    <li>
                        <Link href="/event" > Browse All Event </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
