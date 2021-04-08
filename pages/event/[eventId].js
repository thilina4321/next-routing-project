import {useRouter} from 'next/router'

const SelectedEventPage = () => {
    const router = useRouter()
    console.log(router.query);

    return (
        <div>
            <h1> This is the selected event page </h1>
        </div>
    )
}

export default SelectedEventPage
