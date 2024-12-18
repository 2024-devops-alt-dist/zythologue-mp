import { Router } from "express";
export const router = Router();

import { usersController } from "../controllers/users";

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupérer les users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Liste des users récupérée avec succès.
 */
router.get("/getAll", usersController.getAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Récupérer un user via ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la users
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User trouvé.
 *       404:
 *         description: User introuvable.
 */
router.get("/:id", usersController.getOne);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Ajouter nouvel user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *             required:
 *               - firstname
 *               - lastname
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User ajouté avec succès.
 */
router.post("/", usersController.post);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Mettre à jour un utilisateur par son ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de l'utilisateur à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès.
 *       400:
 *         description: Données invalides.
 *       404:
 *         description: Utilisateur introuvable.
 */
router.put("/:id", usersController.put);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur via son ID
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de l'utilisateur à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès.
 *       404:
 *         description: Utilisateur non trouvé.
 */
router.delete("/:ic", usersController.delete);
