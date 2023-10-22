package com.desenvolvimento.TransEmprego.Model;

import com.desenvolvimento.TransEmprego.DTO.EmpresaDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "tb_empresa")
public class Empresa extends User  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nomeFantasia;
    private String razaoSocial;
    private String cnpj;
    private String cep;
    private String endereco;
    private String logradouro;

    
    public Empresa(EmpresaDTO dto) {
        this.id = dto.getId();
        this.nomeFantasia = dto.getNomeFantasia();
        this.razaoSocial = dto.getRazaoSocial();
        this.cnpj = dto.getCnpj();
        this.cep = dto.getCep();
        this.endereco = dto.getEndereco();
        this.logradouro = dto.getLogradouro();        
    }
}
