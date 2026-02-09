package com.gmao.backend.machine.service;

import java.util.List;

import com.gmao.backend.machine.model.Machine;

public interface MachineServiceInterface {
    List<Machine> findAll();
}
