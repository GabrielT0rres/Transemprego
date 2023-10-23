package com.desenvolvimento.TransEmprego.DTO;

import java.util.HashSet;
import java.util.Set;

import com.desenvolvimento.TransEmprego.Model.Empresa;
import com.desenvolvimento.TransEmprego.Model.Usuario;
import com.desenvolvimento.TransEmprego.Model.Vaga;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VagaDTO {

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
    private String descricaoVaga;
    private Empresa empresa;
    private Set<UsuarioDTO> usuarios = new HashSet<>();

    public VagaDTO(Vaga vaga) {
        this.id = vaga.getId();
        this.cargo = vaga.getCargo();
        this.contato = vaga.getContato();
        this.salario = vaga.getSalario();
        this.beneficio = vaga.getBeneficio();
        this.endereco = vaga.getEndereco();
        this.local = vaga.getLocal();
        this.numeroVagas = vaga.getNumeroVagas();
        this.jornadaTrabalho = vaga.getJornadaTrabalho();
        this.requisitos = vaga.getRequisitos();
        this.descricaoVaga = vaga.getDescricaoVaga();
        this.empresa = vaga.getEmpresa();

        vaga.getUsuarios().forEach(usuario -> {
            this.usuarios.add(new UsuarioDTO (usuario));
        });       
    }
}
