import { Router } from "express";

import {
	deleteUser,
	getAllUser,
	getUsernameAndEmail,
	updateUser,
} from "../controllers/users";
import { isAuthToDelete, isAuthenticated } from "../middlewares";

export default (router: Router) => {
	router.get("/v1/users", getUsernameAndEmail);
	router.get("/v1/users/all", isAuthenticated, getAllUser);
	router.delete("/v1/users", isAuthenticated, isAuthToDelete, deleteUser);
	router.patch("/v1/users", isAuthenticated, isAuthToDelete, updateUser);
};
