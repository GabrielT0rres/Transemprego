package com.desenvolvimento.TransEmprego.DTO;

import com.desenvolvimento.TransEmprego.Model.Empresa;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmpresaDTO {
    private Long id;
    private String nomeFantasia;
    private String razaoSocial;
    private String cnpj;
    private String cep;
    private String endereco;
    private String logradouro;
    private String email;
    private String senha;    

    public EmpresaDTO(Empresa empresa) {
        this.id = empresa.getId();
        this.nomeFantasia = empresa.getNomeFantasia();
        this.razaoSocial = empresa.getRazaoSocial();
        this.cnpj = empresa.getCnpj();
        this.cep = empresa.getCep();
        this.endereco = empresa.getEndereco();
        this.logradouro = empresa.getLogradouro();
        this.email = empresa.getEmail();
        this.senha = empresa.getSenha();    
    }
}
