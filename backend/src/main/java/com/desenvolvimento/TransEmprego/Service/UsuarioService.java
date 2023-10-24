package com.desenvolvimento.TransEmprego.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.desenvolvimento.TransEmprego.DTO.UsuarioDTO;
import com.desenvolvimento.TransEmprego.Model.Usuario;
import com.desenvolvimento.TransEmprego.Repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Transactional(readOnly = true)
    public Page<UsuarioDTO> getAllPaged(Pageable pageable) {
        return usuarioRepository.findAll(pageable).map(UsuarioDTO::new);
    }

    @Transactional(readOnly = true)
    public UsuarioDTO findById(Long id) {
        Usuario usuario = usuarioRepository.findById(id).get();
        return new UsuarioDTO(usuario, usuario.getVagas());
    }

    @Transactional
    public UsuarioDTO create(UsuarioDTO dto) {
        return new UsuarioDTO(usuarioRepository.save(new Usuario(dto)));
    }

    @Transactional
    public UsuarioDTO update(UsuarioDTO dto, Long id) {
        Usuario usuario = usuarioRepository.getReferenceById(id);
        usuario.setNomeCompleto(dto.getNomeCompleto());
        usuario.setNomeSocial(dto.getNomeSocial());
        usuario.setEndereco(dto.getEndereco());
        usuario.setObjetivoProfissional(dto.getObjetivoProfissional());

        return new UsuarioDTO(usuario);
    }

    public void delete(Long id) {
        usuarioRepository.deleteById(id);
    }

}
