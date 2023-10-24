package com.desenvolvimento.TransEmprego.Model;

import java.util.HashSet;
import java.util.Set;

import com.desenvolvimento.TransEmprego.DTO.UsuarioDTO;
import com.desenvolvimento.TransEmprego.DTO.VagaDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_usuario")
public class Usuario extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeCompleto;
    private String nomeSocial;
    private String endereco;
    private String objetivoProfissional;
    @ManyToMany(mappedBy = "usuarios")
    private Set<Vaga> vagas = new HashSet<>();

    public Usuario(UsuarioDTO usuarioDTO) {
        this.id = usuarioDTO.getId();
        this.nomeCompleto = usuarioDTO.getNomeCompleto();
        this.nomeSocial = usuarioDTO.getNomeSocial();
        this.endereco = usuarioDTO.getEndereco();
        this.objetivoProfissional = usuarioDTO.getObjetivoProfissional();

        usuarioDTO.getVagas().forEach(vaga -> {
            this.vagas.add(new Vaga(vaga));
        });
    }
}
