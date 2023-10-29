package com.desenvolvimento.TransEmprego.Controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.desenvolvimento.TransEmprego.DTO.EmpresaDTO;
import com.desenvolvimento.TransEmprego.Service.EmpresaService;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

    @Autowired
    private EmpresaService empresaService;

    @GetMapping
    public ResponseEntity<Page<EmpresaDTO>> getAllPaged(Pageable pageable) {
        return ResponseEntity.ok().body(empresaService.getAllPaged(pageable));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<EmpresaDTO> getOne(@PathVariable Long id) {
        return ResponseEntity.ok().body(empresaService.findById(id));
    }

    
    @PostMapping
    @PreAuthorize("hasRole('ROLE_EMPRESA')")
    public ResponseEntity<EmpresaDTO> create(@RequestBody EmpresaDTO dto) {
        EmpresaDTO dtoSalvo = empresaService.create(dto);
        URI lcoation = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(dtoSalvo.getId())
                .toUri();

        return ResponseEntity.created(lcoation).body(dtoSalvo);
    }

    @PutMapping(value = "/{id}")
    @PreAuthorize("hasRole('ROLE_EMPRESA')")
    public ResponseEntity<EmpresaDTO> update(@RequestBody EmpresaDTO dto, @PathVariable Long id) {
        return ResponseEntity.ok().body(empresaService.update(dto, id));
    }

    @DeleteMapping(value = "/{id}")
    @PreAuthorize("hasRole('ROLE_EMPRESA')")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        empresaService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
