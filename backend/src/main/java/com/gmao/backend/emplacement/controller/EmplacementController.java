package com.gmao.backend.emplacement.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmao.backend.emplacement.service.EmplacementServiceInterface;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import com.gmao.backend.emplacement.model.Emplacement;

@RestController
@RequestMapping("/emplacement")
@CrossOrigin(origins = "http://localhost:5173")
public class EmplacementController {

    private final EmplacementServiceInterface service;

    public EmplacementController(EmplacementServiceInterface service) {
        this.service = service;
    }

    @GetMapping
    public List<Emplacement> getEmplacement(){
        return service.findAll();
    }
    
}
