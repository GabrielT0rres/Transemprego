package com.desenvolvimento.TransEmprego.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsuarioVagaDTO {
    Long idVaga;
    Long idUsuario;
}
