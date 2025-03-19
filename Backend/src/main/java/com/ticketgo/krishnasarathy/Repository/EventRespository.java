package com.ticketgo.krishnasarathy.Repository;

import java.util.Optional;
import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ticketgo.krishnasarathy.model.Event;


public interface EventRespository extends JpaRepository<Event,String>{
    Optional<Event> findByEventId(String eventId);
    void deleteByEventId(String eventId);
    List<Event> findAll();
}
