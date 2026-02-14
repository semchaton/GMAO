package com.gmao.backend.ur.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.gmao.backend.ur.repository.UrRepository;
import com.gmao.backend.ur.model.Ur;

@Service
public class UrService implements UrServiceInterface{

    private final UrRepository repository;

    public UrService(UrRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public List<Ur> findAll(){
        return repository.findAll();
    }
}