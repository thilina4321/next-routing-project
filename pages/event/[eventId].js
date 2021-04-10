import { Fragment } from 'react'
import {useRouter} from 'next/router'
import EventDetails from '../../components/events/event-details'
import { getEventById } from '../../dummy-data'

const SelectedEventPage = () => {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId)
    if(!event){
        return <p> Event is not found... </p>
    }

    console.log(event);

    return (
        <Fragment>
            <EventDetails location={event.location} date={event.date} image={event.image}
            title={event.title} description={event.description}  />
        </Fragment>
    )
}

export default SelectedEventPage
