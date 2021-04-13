import { Fragment } from 'react'
import {useRouter} from 'next/router'
import EventDetails from '../../components/events/event-details'
import { getEventById, getAllEvents } from '../../helper/http-util'
import Comment from '../../components/input/comment'

const SelectedEventPage = (props) => {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = props.event
    if(!event){
        return <p> Event is not found... </p>
    }

    console.log(event);

    return (
        <Fragment>
            <EventDetails location={event.location} date={event.date} image={event.image}
            title={event.title} description={event.description}  />

            <Comment eventId={eventId}/>
        </Fragment>
    )
}

export const getStaticProps = async(context)=>{
    const eventId = context.params.eventId
    const event = await getEventById(eventId)

    return {
        props:{
            event
        }
    }
}

export const getStaticPaths = async()=>{
    const events = await getAllEvents()
    const paths = events.map(event=> ({params:{eventId:event.id}}) )
    return {
        paths,
        fallback:false
    }
}

export default SelectedEventPage

