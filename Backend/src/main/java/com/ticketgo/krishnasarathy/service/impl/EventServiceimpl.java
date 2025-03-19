package com.ticketgo.krishnasarathy.service.impl;

import java.util.*;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.ticketgo.krishnasarathy.Repository.EventRespository;
import com.ticketgo.krishnasarathy.dto.request.EventRequest;
import com.ticketgo.krishnasarathy.dto.response.BasicResponse;
import com.ticketgo.krishnasarathy.dto.response.EventResponse;

import com.ticketgo.krishnasarathy.model.Event;

import com.ticketgo.krishnasarathy.service.EventService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class EventServiceimpl implements EventService {

    private final EventRespository eventRespository;

    @Override
    public EventResponse resgisterevent(EventRequest request) {
        Event event= new Event();
        event.setEventId(request.getEventId());
        event.setEventName(request.getEvent_name());
        event.setEventType(request.getEvent_type());;
        eventRespository.save(event);
        return EventResponse.builder()
                .eventId(event.getEventId())
                .eventName(event.getEventName())
                .eventType(event.getEventType())
                .build();
        
    }

    @Override
    public BasicResponse<EventResponse> getAllEvents() {
        List<Event> events = eventRespository.findAll();
        List<EventResponse> eventResponses = events.stream().map(event ->
                EventResponse.builder()
                        .eventId(event.getEventId())
                        .eventName(event.getEventName())
                        .eventType(event.getEventType())
                        .build()
        ).collect(Collectors.toList());
    
        return BasicResponse.<EventResponse>builder()
                .message("Event data fetch successfully")
                .data(eventResponses)
                .build();
    }

    @Override
    public EventResponse getEventById(String id) {    
        Optional<Event> isEventExists = eventRespository.findByEventId(id);
        return EventResponse.builder()
            .eventId(isEventExists.get().getEventId())
            .eventName(isEventExists.get().getEventName())
            .eventType(isEventExists.get().getEventType())
            .build();
        
    }

    @Override
    public EventResponse updateEvent(String eventId, EventRequest eventRequest) {
        Optional<Event> optionalevent = eventRespository.findById(eventId);
    if (optionalevent.isPresent()) {
        Event events = optionalevent.get();
        // events.setEventId(eventRequest.getEventId());
        events.setEventName(eventRequest.getEvent_name());
        events.setEventType(eventRequest.getEvent_type());
        // Update other fields as needed
        eventRespository.save(events);
        return EventResponse.builder()
        .eventId(eventId)        
        .build();
    
    } else {
        return EventResponse.builder()
                .eventId(eventId)
                
                .build();
    }
    }

    @Override
    public BasicResponse<EventResponse> deleteEvent(String eventId) {
        if (eventRespository.existsById(eventId)) {
            eventRespository.deleteById(eventId);
            return BasicResponse.<EventResponse>builder()
                .message("Booking deleted successfully")
                .build();
        } 
        else {
            return BasicResponse.<EventResponse>builder()
                .message("Booking not found with ID: " + eventId)
                .build();
        }
    }
    

  
    




    
    

      


}
