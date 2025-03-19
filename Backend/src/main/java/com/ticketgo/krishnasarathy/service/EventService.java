package com.ticketgo.krishnasarathy.service;



import com.ticketgo.krishnasarathy.dto.request.EventRequest;
import com.ticketgo.krishnasarathy.dto.response.BasicResponse;
import com.ticketgo.krishnasarathy.dto.response.EventResponse;

public interface EventService {

    EventResponse resgisterevent(EventRequest request);
    
    BasicResponse<EventResponse> getAllEvents();

    EventResponse getEventById(String id);

    

    

    EventResponse updateEvent(String eventId, EventRequest eventRequest);



    BasicResponse<EventResponse> deleteEvent(String eventId);
    

    
    
}
