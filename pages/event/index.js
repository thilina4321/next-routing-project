import { useRouter } from "next/router"
import { Fragment } from "react"
import EventList from "../../components/events/event-list"
import SearchEvent from "../../components/events/search-event"
import { getAllEvents } from "../../dummy-data"

const EventsPage = () => {
    const events = getAllEvents()
    const router = useRouter()

    const onSearch = ( month, year)=>{
        const fullPath = `/event/${year}/${month}`
        router.push({pathname:fullPath})

    }

    return (
        <Fragment>
            <SearchEvent onSearch={onSearch} />
            <EventList items={events} />
        </Fragment>
    )
}

export default EventsPage
