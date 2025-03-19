package com.ticketgo.krishnasarathy.service.impl;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.ticketgo.krishnasarathy.Repository.UserRepository;
import com.ticketgo.krishnasarathy.dto.request.UserRequest;
import com.ticketgo.krishnasarathy.dto.response.BasicResponse;
import com.ticketgo.krishnasarathy.dto.response.UserResponse;
import com.ticketgo.krishnasarathy.model.User;
import com.ticketgo.krishnasarathy.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceimpl implements UserService{
    
    private final UserRepository userRepository;


    @Override
    public BasicResponse<UserResponse> getAllUser() {
        List<User> users=userRepository.findAll();
        List<UserResponse> useresponse=users.stream().map(user->UserResponse.builder()
        .id(user.getId())
        .name(user.getName())
        .email(user.getEmail())
        .build()).collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder().message("User data fetch successfully").data(useresponse).build();
    }
    
   

    @Override
    public BasicResponse<UserResponse> getById(String userId) {
        BasicResponse<UserResponse> response = new BasicResponse<>();
    
        Optional<User> isUserExists = userRepository.findById(userId);
        if (!isUserExists.isPresent()) {
            response.setMessage("User not found");
            
            return response;
        }
    
        User user = isUserExists.get();
        UserResponse userResponse = UserResponse.builder()
                                    .id(user.getId())
                                    .name(user.getName())
                                    .email(user.getEmail())
                                    .build();
        
        response.setMessage("User found"); // Optionally set a message
        response.setData(userResponse); // Set the UserResponse directly
    
        return response;
    }
    


   @Override
public UserResponse updateUser(String userId, UserRequest userRequest) {
    
    Optional<User> optionalUser = userRepository.findById(userId);
    if (optionalUser.isPresent()) {
        User user = optionalUser.get();
        user.setName(userRequest.getName());
        user.setEmail(userRequest.getEmail());
        // Update other fields as needed
        userRepository.save(user);
        return UserResponse.builder()
                .id(userId)
                .build();
    
    } else {
        return UserResponse.builder()
                .id(userId)
                
                .build();
    }
}

@Override
public UserResponse deleteUser(String userId) {
    try {
        userRepository.deleteById(userId);
        return UserResponse.builder()
                .id("delete_user")
                
                .build();
    } catch (EmptyResultDataAccessException e) {
        return UserResponse.builder()
                .id("delete_user")
                
                .build();
    }
}





}
