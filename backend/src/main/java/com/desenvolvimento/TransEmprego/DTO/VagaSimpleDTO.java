package com.desenvolvimento.TransEmprego.DTO;


import com.desenvolvimento.TransEmprego.Model.Empresa;
import com.desenvolvimento.TransEmprego.Model.Vaga;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VagaSimpleDTO {
    private Long id;
    private String cargo;
    private String descricaoVaga;
    private EmpresaSimpleDTO empresa;

    public VagaSimpleDTO(Vaga vaga) {
        this.id = vaga.getId();
        this.cargo = vaga.getCargo();       
        this.descricaoVaga = vaga.getDescricaoVaga();
        this.empresa = new EmpresaSimpleDTO(vaga.getEmpresa());     
    }
}
