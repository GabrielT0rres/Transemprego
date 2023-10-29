package com.desenvolvimento.TransEmprego.config.security.customgrant;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

public class CustomUserAuthorities {
	private Long id;
	private String username;
	private Collection<? extends GrantedAuthority> authorities;

	public CustomUserAuthorities(String username, Collection<? extends GrantedAuthority> authorities, Long id) {
		this.username = username;
		this.authorities = authorities;
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public Long getId() {
		return id;
	}

    @Override
    public String toString() {
        return "CustomUserAuthorities [id=" + id + ", username=" + username + ", authorities=" + authorities + "]";
    }

	

}
