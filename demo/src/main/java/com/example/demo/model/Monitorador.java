package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Monitorador{

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(nullable = false)
  private String nome;

  @Column(nullable = false)
  private String tipoPessoa;

  private String cpf;

  private String rg;

  private String cnpj;

  private String inscricaoEstadual;

  @Column(nullable = false)
  private String email;

  @Column(nullable = false)
  private String contato;

}