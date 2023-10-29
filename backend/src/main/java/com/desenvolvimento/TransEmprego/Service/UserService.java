package com.desenvolvimento.TransEmprego.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.desenvolvimento.TransEmprego.Model.User;
import com.desenvolvimento.TransEmprego.Repository.EmpresaRepository;
import com.desenvolvimento.TransEmprego.Repository.UsuarioRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private EmpresaRepository empresaRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = usuarioRepository.findByEmail(username);
        
        if (user == null) {
            user = empresaRepository.findByEmail(username);
        }
        
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }

        return user;
    }
    
}
