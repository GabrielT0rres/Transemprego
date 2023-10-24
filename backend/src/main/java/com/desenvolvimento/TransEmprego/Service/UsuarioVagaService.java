package com.desenvolvimento.TransEmprego.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desenvolvimento.TransEmprego.DTO.UsuarioDTO;
import com.desenvolvimento.TransEmprego.DTO.UsuarioVagaDTO;
import com.desenvolvimento.TransEmprego.Model.Usuario;
import com.desenvolvimento.TransEmprego.Repository.UsuarioRepository;
import com.desenvolvimento.TransEmprego.Repository.VagaRepository;

@Service
public class UsuarioVagaService {

    @Autowired
    UsuarioRepository usuarioRepository;

    @Autowired
    VagaRepository vagaRepository;

    public UsuarioDTO candidatar(UsuarioVagaDTO dto) {
        System.out.println("--------------1");
        Usuario usuario = usuarioRepository.getReferenceById(dto.getIdUsuario());
        System.out.println("--------------2");
        var a = vagaRepository.getReferenceById(dto.getIdVaga());
        System.out.println("--------------3");
        System.out.println(usuario.getVagas());
        System.out.println("--------------4");
        usuario.getVagas().forEach(v -> {
            System.out.println("--------------6");
            System.out.println(v.getCargo());
        });
        usuario.getVagas().add(a);
        System.out.println("--------------7");
        return new UsuarioDTO(usuario, usuario.getVagas());
    }

}
