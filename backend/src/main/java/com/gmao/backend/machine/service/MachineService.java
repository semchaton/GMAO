package com.gmao.backend.machine.service;
import java.util.List;

import org.springframework.stereotype.Service;

import com.gmao.backend.machine.repository.MachineRepository;
import com.gmao.backend.machine.model.Machine;

@Service
public class MachineService implements MachineServiceInterface{

    private final MachineRepository repository;

    public MachineService(MachineRepository repository) {
        this.repository = repository;
    }
    
    @Override
    public List<Machine> findAll(){
        return repository.findAll();
    }
}
