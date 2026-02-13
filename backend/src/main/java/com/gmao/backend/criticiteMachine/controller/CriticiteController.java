package com.gmao.backend.criticiteMachine.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gmao.backend.criticiteMachine.service.CriticiteServiceInterface;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import com.gmao.backend.criticiteMachine.model.Criticite;

@RestController
@RequestMapping("/machine")
@CrossOrigin(origins = "http://localhost:5173/")
public class CriticiteController {

    private final CriticiteServiceInterface service;

    public CriticiteController(CriticiteServiceInterface service) {
        this.service = service;
    }

    @GetMapping
    public List<Criticite> getCriticite(){
        return service.findAll();
    }
    
}
