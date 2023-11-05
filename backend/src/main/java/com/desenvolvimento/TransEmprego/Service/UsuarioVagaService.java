package com.desenvolvimento.TransEmprego.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desenvolvimento.TransEmprego.DTO.UsuarioDTO;
import com.desenvolvimento.TransEmprego.DTO.UsuarioVagaDTO;
import com.desenvolvimento.TransEmprego.Model.Usuario;
import com.desenvolvimento.TransEmprego.Model.Vaga;
import com.desenvolvimento.TransEmprego.Repository.UsuarioRepository;
import com.desenvolvimento.TransEmprego.Repository.VagaRepository;
import com.desenvolvimento.TransEmprego.config.security.JwtUtil;

import jakarta.transaction.Transactional;

@Service
public class UsuarioVagaService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    VagaRepository vagaRepository;

    @Transactional
    public UsuarioDTO candidatar(UsuarioVagaDTO dto) {
        Usuario usuario = usuarioRepository.getReferenceById(JwtUtil.getUserIdbyToken());
        Vaga vaga = vagaRepository.getReferenceById(dto.getIdVaga());

        usuario.getVagas().add(vaga);
        vaga.getUsuarios().add(usuario);

        return new UsuarioDTO(usuario, usuario.getVagas());
    }

}
