package com.hamza.users.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hamza.users.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	Role findByRole(String role);
}