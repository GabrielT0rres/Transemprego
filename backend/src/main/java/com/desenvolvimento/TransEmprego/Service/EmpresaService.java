package com.desenvolvimento.TransEmprego.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.desenvolvimento.TransEmprego.DTO.EmpresaDTO;
import com.desenvolvimento.TransEmprego.Model.Empresa;
import com.desenvolvimento.TransEmprego.Repository.EmpresaRepository;

@Service
public class EmpresaService {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public Page<EmpresaDTO> getAllPaged(Pageable pageable) {
        return empresaRepository.findAll(pageable).map(EmpresaDTO::new);
    }

    @Transactional(readOnly = true)
    public EmpresaDTO findById(Long id) {
        return new EmpresaDTO(empresaRepository.findById(id).get());
    }

    @Transactional
    public EmpresaDTO create(EmpresaDTO dto) {
        Empresa empresa = new Empresa(dto);
        empresa.setSenha(passwordEncoder.encode(dto.getSenha()));
        return new EmpresaDTO(empresaRepository.save(empresa));
    }

    @Transactional
    public EmpresaDTO update(EmpresaDTO dto, Long id) {
        Empresa empresa = empresaRepository.getReferenceById(id);
        empresa.setNomeFantasia(dto.getNomeFantasia());
        empresa.setRazaoSocial(dto.getRazaoSocial());
        empresa.setCnpj(dto.getCnpj());
        empresa.setCep(dto.getCep());
        empresa.setEndereco(dto.getEndereco());
        empresa.setLogradouro(dto.getLogradouro());

        return new EmpresaDTO(empresa);
    }

    public void delete(Long id) {
        empresaRepository.deleteById(id);
    }
}
