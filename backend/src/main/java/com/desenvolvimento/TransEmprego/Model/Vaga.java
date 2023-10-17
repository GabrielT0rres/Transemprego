package com.desenvolvimento.TransEmprego.Model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.desenvolvimento.TransEmprego.DTO.VagaDTO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
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

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_vaga")
public class Vaga {	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cargo;
    private String contato;
    private Double salario;
    private String beneficio;
    private String endereco;
    private String local;
    private Integer numeroVagas;
    private String jornadaTrabalho;
    private String requisitos;

    @Column(columnDefinition = "TEXT")
    private String descricaoVaga;

    @ManyToOne
    @JoinColumn(name = "empresa_id")
    private Empresa empresa;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "tb_usuario_vagas", 
            joinColumns = @JoinColumn(name = "vaga_id"), 
            inverseJoinColumns = @JoinColumn(name = "usuario_id"))
    private Set<Usuario> usuarios;   

    public Vaga(VagaDTO dto) {
        this.id = dto.getId();
        this.cargo = dto.getCargo();
        this.contato = dto.getContato();
        this.salario = dto.getSalario();
        this.beneficio = dto.getBeneficio();
        this.endereco = dto.getEndereco();
        this.local = dto.getLocal();
        this.numeroVagas = dto.getNumeroVagas();
        this.jornadaTrabalho = dto.getJornadaTrabalho();
        this.requisitos = dto.getRequisitos();
        this.descricaoVaga = dto.getDescricaoVaga();
        this.empresa = dto.getEmpresa();
        this.usuarios = dto.getUsuarios();
    }
}
