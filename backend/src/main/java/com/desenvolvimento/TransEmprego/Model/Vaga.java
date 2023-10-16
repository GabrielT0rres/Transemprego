package com.desenvolvimento.TransEmprego.Model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tb_vaga")
public class Vaga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVaga;
    private String cargo;
    private String contato;
    private Double salario;
    private String beneficio;
    private String endereco;
    private String local;
    private Integer numeroVagas;
    private String jornadaTrabalho;
    private String requisitos;
    private String descricaoVaga;
    @ManyToOne
    private Empresa empresa;
    @ManyToMany
    @JoinTable(name = "tb_usuario_vagas", 
            joinColumns = @JoinColumn(name = "id_vaga"), 
            inverseJoinColumns = @JoinColumn(name = "id_usuario"))
    private Set<Usuario> usuarios = new HashSet<>();

}
