package com.desenvolvimento.TransEmprego.Controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desenvolvimento.TransEmprego.DTO.UsuarioDTO;
import com.desenvolvimento.TransEmprego.Service.UsuarioService;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<Page<UsuarioDTO>> getAllPaged(Pageable pageable) {
        return ResponseEntity.ok().body(usuarioService.getAllPaged(pageable));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<UsuarioDTO> getOne(@PathVariable Long id) {
        return ResponseEntity.ok().body(usuarioService.findById(id));
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> create(@RequestBody UsuarioDTO dto) {
        UsuarioDTO dtoSalvo = usuarioService.create(dto);
        URI lcoation = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(dtoSalvo.getId())
                .toUri();

        return ResponseEntity.created(lcoation).body(dtoSalvo);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<UsuarioDTO> update(@RequestBody UsuarioDTO dto, @PathVariable Long id) {
        return ResponseEntity.ok().body(usuarioService.update(dto, id));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        usuarioService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
