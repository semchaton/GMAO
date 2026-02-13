package com.gmao.backend.criticiteMachine.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.gmao.backend.criticiteMachine.repository.CriticiteRepository;
import com.gmao.backend.criticiteMachine.model.Criticite;

@Service
public class CriticiteService implements CriticiteServiceInterface{

    private final CriticiteRepository repository;

    public CriticiteService(CriticiteRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public List<Criticite> findAll(){
        return repository.findAll();
    }
}