package com.gmao.backend.ur.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmao.backend.ur.service.UrServiceInterface;

import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import com.gmao.backend.ur.model.Ur;

@RestController
@RequestMapping("/ur")
@CrossOrigin(origins = "http://localhost:5173")
public class UrController {

    private final UrServiceInterface service;

    public UrController(UrServiceInterface service) {
        this.service = service;
    }

    @GetMapping
    public List<Ur> getUr(){
        return service.findAll();
    }
    
}
