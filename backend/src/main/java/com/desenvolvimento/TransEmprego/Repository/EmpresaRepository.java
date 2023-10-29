package com.desenvolvimento.TransEmprego.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.desenvolvimento.TransEmprego.Model.Empresa;


@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {
    Empresa findByEmail(String email);
}
