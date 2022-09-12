package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Monitorador;
import com.example.demo.repository.MonitoradorRepository;


@RestController
@RequestMapping("/api/monitorador")
public class MonitoradorController {


  private MonitoradorRepository monitoradorRepository;


  public MonitoradorController(MonitoradorRepository monitoradorRepository) {
    this.monitoradorRepository = monitoradorRepository;
  }


  @GetMapping
  public List<Monitorador> list() {
    return monitoradorRepository.findAll();
  }


  public MonitoradorRepository getMonitoradorRepository() {
    return monitoradorRepository;
  }


  public void setMonitoradorRepository(MonitoradorRepository monitoradorRepository) {
    this.monitoradorRepository = monitoradorRepository;
  }
}
