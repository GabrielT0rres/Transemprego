package com.desenvolvimento.TransEmprego.DTO;

import java.util.HashSet;
import java.util.Set;

import com.desenvolvimento.TransEmprego.Model.Usuario;
import com.desenvolvimento.TransEmprego.Model.Vaga;

import lombok.Data;

@Data
public class UsuarioDTO {
    private Long id;
    private String nomeCompleto;
    private String nomeSocial;
    private String endereco;
    private String objetivoProfissional;
    private Set<VagaDTO> vagas = new HashSet<>();

    public UsuarioDTO(Usuario usuario) {
        this.id = usuario.getId();
        this.nomeCompleto = usuario.getNomeCompleto();
        this.nomeSocial = usuario.getNomeSocial();
        this.endereco = usuario.getEndereco();
        this.objetivoProfissional = usuario.getObjetivoProfissional();
    }
    
    public UsuarioDTO(Usuario usuario, Set<Vaga> vagas) {
        this.id = usuario.getId();
        this.nomeCompleto = usuario.getNomeCompleto();
        this.nomeSocial = usuario.getNomeSocial();
        this.endereco = usuario.getEndereco();
        this.objetivoProfissional = usuario.getObjetivoProfissional();
        vagas.forEach(vaga -> {
            this.vagas.add(new VagaDTO(vaga));
        });   
    }    
}
