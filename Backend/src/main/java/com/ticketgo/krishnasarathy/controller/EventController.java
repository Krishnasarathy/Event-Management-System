package com.ticketgo.krishnasarathy.controller;

import static com.ticketgo.krishnasarathy.Utils.MyConstant.EVENT;
import static com.ticketgo.krishnasarathy.Utils.MyConstant.EVENTLIST;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.ticketgo.krishnasarathy.dto.request.EventRequest;
import com.ticketgo.krishnasarathy.dto.response.BasicResponse;
import com.ticketgo.krishnasarathy.dto.response.EventResponse;

import com.ticketgo.krishnasarathy.service.EventService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(EVENT)
@RequiredArgsConstructor
public class EventController {
    private final EventService eventService;
    
    @GetMapping(EVENTLIST)
    public ResponseEntity<BasicResponse<EventResponse>> getAll(){
        BasicResponse<EventResponse> response=new BasicResponse<>();
        try{
            response =eventService.getAllEvents();
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    

    @GetMapping("/{eventId}")
    public ResponseEntity<EventResponse> getEventById(@PathVariable String eventId) {
        EventResponse eventResponse = eventService.getEventById(eventId);
        return ResponseEntity.ok(eventResponse);
    }


    @PutMapping("/{eventId}")
    public ResponseEntity<EventResponse> updateEvent(@PathVariable String eventId, @RequestBody EventRequest eventRequest) {
        EventResponse updatedEvent = eventService.updateEvent(eventId, eventRequest);
        return ResponseEntity.ok(updatedEvent);
    }

   @DeleteMapping("/{eventId}")
    public ResponseEntity<BasicResponse<EventResponse>> deleteCourse(@PathVariable String eventId) {
        BasicResponse<EventResponse> response = new BasicResponse<>();
        try {
            BasicResponse<EventResponse> deletedBookingResponse = eventService.deleteEvent(eventId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete course: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

      @PostMapping // Add this annotation for handling POST requests
    public ResponseEntity<EventResponse> createEvent(@RequestBody EventRequest eventRequest) {
        EventResponse createdEvent = eventService.resgisterevent(eventRequest);
        return ResponseEntity.ok(createdEvent);
    }
    
    
    

   
}
