export const getAllEvents = async()=>{
    const response = await fetch('https://simple-1db1e-default-rtdb.firebaseio.com/events.json')
    const responseData = await response.json()

    const events = []
    for(let key in responseData){
        events.push({id:key, ...responseData[key]})
    }

    return events
}

export const getFilteredEvents = async(dateFilter)=> {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents()
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }

export const geteaturedEvents = async()=>{
    const allEvents = await getAllEvents()

    return allEvents.filter((event)=>event.isFeatured)
}

export const getEventById = async(id)=> {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
  }