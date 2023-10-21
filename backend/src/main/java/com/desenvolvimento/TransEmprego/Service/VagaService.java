package com.desenvolvimento.TransEmprego.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.desenvolvimento.TransEmprego.DTO.VagaDTO;
import com.desenvolvimento.TransEmprego.Model.Vaga;
import com.desenvolvimento.TransEmprego.Repository.EmpresaRepository;
import com.desenvolvimento.TransEmprego.Repository.UsuarioRepository;
import com.desenvolvimento.TransEmprego.Repository.VagaRepository;

@Service
public class VagaService {

    @Autowired
    private VagaRepository vagaRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional(readOnly = true)
    public Page<VagaDTO> findAllPaged(Pageable pageable) {
        return vagaRepository.findAll(pageable).map(VagaDTO::new);
    }

    @Transactional(readOnly = true)
    public VagaDTO findById(Long id) {
        return new VagaDTO(vagaRepository.findById(id).get());
    }

    @Transactional
    public VagaDTO create(VagaDTO dto) {
        dto.setEmpresa(empresaRepository.findById(dto.getEmpresa().getId()).get());
        return new VagaDTO(vagaRepository.save(new Vaga(dto)));
    }

    @Transactional
    public VagaDTO update(VagaDTO dto, Long id) {
        Vaga vaga = vagaRepository.getReferenceById(id);
        vaga.setBeneficio(dto.getBeneficio());
        vaga.setCargo(dto.getCargo());
        vaga.setContato(dto.getContato());
        vaga.setEndereco(dto.getEndereco());
        vaga.setJornadaTrabalho(dto.getJornadaTrabalho());
        vaga.setLocal(dto.getLocal());
        vaga.setNumeroVagas(dto.getNumeroVagas());
        vaga.setRequisitos(dto.getRequisitos());
        vaga.setSalario(dto.getSalario());
        vaga.setDescricaoVaga(dto.getDescricaoVaga());
        vaga.setEmpresa(empresaRepository.findById(dto.getEmpresa().getId()).get());
        dto.getUsuarios()
                .forEach((usuario) -> vaga.getUsuarios().add(usuarioRepository.findById(usuario.getId()).get()));
        return new VagaDTO(vaga);
    }

    public void delete(Long id) {
        vagaRepository.deleteById(id);
    }

}
