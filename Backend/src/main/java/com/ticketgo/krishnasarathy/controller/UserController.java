package com.ticketgo.krishnasarathy.controller;

import static com.ticketgo.krishnasarathy.Utils.MyConstant.USER;
import static com.ticketgo.krishnasarathy.Utils.MyConstant.USERLIST;
import static com.ticketgo.krishnasarathy.Utils.MyConstant.USERUPDATE;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ticketgo.krishnasarathy.Utils.MyConstant;
import com.ticketgo.krishnasarathy.dto.request.UserRequest;
import com.ticketgo.krishnasarathy.dto.response.BasicResponse;

import com.ticketgo.krishnasarathy.dto.response.UserResponse;
import com.ticketgo.krishnasarathy.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor

public class UserController {
    private final UserService userService; 
    @GetMapping(USERLIST)
    public ResponseEntity<BasicResponse<UserResponse>> getAllUser(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response = userService.getAllUser();
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

    @GetMapping(MyConstant.USERGETID)
public ResponseEntity<BasicResponse<UserResponse>> getById(@PathVariable String getId){
    BasicResponse<UserResponse> response=new BasicResponse<>();
    try{
        response = userService.getById(getId); // Pass the required argument
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    catch(Exception e){
        response.setMessage("Something went wrong!");
        return new ResponseEntity<>(response, EXPECTATION_FAILED);
    }
}



 @PutMapping(USERUPDATE)
    public ResponseEntity<UserResponse> updateUser(@PathVariable String userId, @RequestBody UserRequest userRequest) {
        UserResponse response=userService.updateUser(userId, userRequest);
        
        // EventResponse response = userService.updateUser(userId, userRequest);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping(MyConstant.USERDELETE)
    public ResponseEntity<UserResponse> deleteUser(@PathVariable String userId) {
        UserResponse response=userService.deleteUser(userId);
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    
}
