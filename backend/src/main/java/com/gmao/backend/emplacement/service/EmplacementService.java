package com.gmao.backend.emplacement.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.gmao.backend.emplacement.repository.EmplacementRepository;
import com.gmao.backend.emplacement.model.Emplacement;

@Service
public class EmplacementService implements EmplacementServiceInterface{

    private final EmplacementRepository repository;

    public EmplacementService(EmplacementRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public List<Emplacement> findAll(){
        return repository.findAll();
    }
}