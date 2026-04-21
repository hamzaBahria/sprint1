package com.hamza.users.service;

import java.util.List;

import com.hamza.users.entities.Role;
import com.hamza.users.entities.User;

public interface UserService {
	User saveUser(User user);

	User findUserByUsername(String username);

	Role addRole(Role role);

	User addRoleToUser(String username, String rolename);
	List<User> findAllUsers();
}
