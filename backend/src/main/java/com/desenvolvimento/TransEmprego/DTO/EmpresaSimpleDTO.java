package com.desenvolvimento.TransEmprego.DTO;

import com.desenvolvimento.TransEmprego.Model.Empresa;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmpresaSimpleDTO {
    private Long id;
    private String nomeFantasia;
    private String razaoSocial;
    private String cnpj;   

    public EmpresaSimpleDTO(Empresa empresa) {
        this.id = empresa.getId();
        this.nomeFantasia = empresa.getNomeFantasia();
        this.razaoSocial = empresa.getRazaoSocial();
        this.cnpj = empresa.getCnpj();   
    }
}
