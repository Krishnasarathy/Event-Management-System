package com.ticketgo.krishnasarathy.dto.response;
import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BasicResponse<T> {
    private String message;

    @Builder.Default
    private  List<T> data = Collections.emptyList();
    public void setData(T singleData) {
        this.data = Collections.singletonList(singleData); // Create a list with a single element
    }
}
