package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.model.Monitorador;
import com.example.demo.repository.MonitoradorRepository;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

  @Bean
  CommandLineRunner initDataBase(MonitoradorRepository monitoradorRepository){
    return args -> {
      monitoradorRepository.deleteAll();

      Monitorador c = new Monitorador();
      c.setNome("Alexandre");
      c.setCpf("12345678910");


      monitoradorRepository.save(c);
    };
  }
}
