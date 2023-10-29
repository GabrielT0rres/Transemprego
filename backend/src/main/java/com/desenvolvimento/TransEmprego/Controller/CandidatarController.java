package com.desenvolvimento.TransEmprego.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desenvolvimento.TransEmprego.DTO.UsuarioDTO;
import com.desenvolvimento.TransEmprego.DTO.UsuarioVagaDTO;
import com.desenvolvimento.TransEmprego.Service.UsuarioVagaService;

@RestController
@RequestMapping("/candidatar")
@PreAuthorize("hasRole('ROLE_USUARIO')")
public class CandidatarController {

    @Autowired
    UsuarioVagaService usuarioVagaService;

    @PostMapping
    public ResponseEntity<UsuarioDTO> candidatar(@RequestBody UsuarioVagaDTO dto) {
        return ResponseEntity.ok().body(usuarioVagaService.candidatar(dto));
    }
}
