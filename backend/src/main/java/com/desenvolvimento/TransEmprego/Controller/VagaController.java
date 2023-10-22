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

import com.desenvolvimento.TransEmprego.DTO.VagaDTO;
import com.desenvolvimento.TransEmprego.Service.VagaService;

@RestController
@RequestMapping("/vagas")
@CrossOrigin(origins = "*")
public class VagaController {

    @Autowired
    private VagaService vagaService;

    @GetMapping
    public ResponseEntity<Page<VagaDTO>> findAllPaged(Pageable pageable) {
        return ResponseEntity.ok().body(vagaService.findAllPaged(pageable));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<VagaDTO> findById(@PathVariable Long id) {
        return ResponseEntity.ok().body(vagaService.findById(id));
    }

    @PostMapping
    public ResponseEntity<VagaDTO> create(@RequestBody VagaDTO dto) {
        VagaDTO dtoSalvo = vagaService.create(dto);

        URI location = ServletUriComponentsBuilder
                .fromCurrentRequestUri()
                .path("/{id}")
                .buildAndExpand(dtoSalvo.getId())
                .toUri();

        return ResponseEntity.created(location).body(dtoSalvo);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<VagaDTO> update(@RequestBody VagaDTO dto, @PathVariable Long id) {
        return ResponseEntity.ok().body(vagaService.update(dto, id));
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        vagaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
