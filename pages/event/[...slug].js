import {useRouter} from 'next/router'
import {getFilteredEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list'
import { Fragment } from 'react'

const FilteredEventPage = ()=>{
    const router = useRouter()

    const slug = router.query.slug
    if(!slug){
        return <p> Loading...... </p>
    }
    const year = +slug[0]
    const month = +slug[1]

    const events = getFilteredEvents({month, year})
    console.log(events);

    if(events.length == 0){
        return <Fragment>
        <p className="center" > No Events Founds </p>
        <div className="center" >
        <button onClick={()=>router.push('/event')} > Search Events </button>
        </div>
        </Fragment>
    }
    
    return (
        <div>
            <EventList items={events} />
        </div>
    )
}

export default FilteredEventPage