package com.desenvolvimento.TransEmprego.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.jwt.Jwt;


public class JwtUtil {
    
    @Bean
    public static Long getUserIdbyToken() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Jwt jwt = (Jwt) authentication.getPrincipal();
        return Long.parseLong(jwt.getClaimAsString("userId"));

    }
}
