package com.ticketgo.krishnasarathy.service;



import com.ticketgo.krishnasarathy.dto.request.UserRequest;
import com.ticketgo.krishnasarathy.dto.response.BasicResponse;
import com.ticketgo.krishnasarathy.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

    BasicResponse<UserResponse> getById(String userId);

    
    UserResponse updateUser(String userId, UserRequest userRequest);

    UserResponse  deleteUser(String userId);
    
    

   

}
