import {useRouter} from 'next/router'
import {getFilteredEvents} from '../../helper/http-util'
import EventList from '../../components/events/event-list'
import { Fragment } from 'react'

const FilteredEventPage = (props)=>{
    const router = useRouter()

    const {events,year,month} = props
    // const slug = router.query.slug
    // if(!slug){
    //     return <p> Loading...... </p>
    // }
    // const year = +slug[0]
    // const month = +slug[1]

    // const events = getFilteredEvents({month, year})
    console.log(events);
    console.log(year,month);

    if(!events){
        return <p> Loading.... </p>
    }

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

export const getServerSideProps = async(context)=>{
    const slug = context.params.slug
    const year = +slug[0]
    const month = +slug[1]

    const events = await getFilteredEvents({month, year})

    return {
        props:{
            events,
            year,
            month
        }
    }

}

export default FilteredEventPage