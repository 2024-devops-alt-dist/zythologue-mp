import { Router } from "express";
export const router = Router();

import { beersController } from "../controllers/beers";

/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Récupérer toutes les bières
 *     tags:
 *       - Beers
 *     responses:
 *       200:
 *         description: Liste des bières récupérée avec succès.
 */
router.get("/getAll", beersController.getAll);

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Récupérer une bière par son ID
 *     tags:
 *       - Beers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la bière
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bière trouvée.
 *       404:
 *         description: Bière introuvable.
 */
router.get("/:id", beersController.getOne);

/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Ajouter une nouvelle bière
 *     tags:
 *       - Beers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               organic:
 *                 type: boolean
 *               id_category:
 *                 type: number
 *               id_brewery:
 *                 type: number
 *             required:
 *               - name
 *               - description
 *               - abv
 *               - organic
 *     responses:
 *       201:
 *         description: Bière ajoutée avec succès.
 *       400:
 *         description: Données invalides.
 */
router.post("/", beersController.post);

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Mettre à jour une bière par son ID
 *     tags:
 *       - Beers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la bière à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               abv:
 *                 type: number
 *               organic:
 *                 type: boolean
 *               id_category:
 *                 type: number
 *               id_brewery:
 *                 type: number
 *     responses:
 *       200:
 *         description: Bière mise à jour avec succès.
 *       400:
 *         description: Données invalides.
 *       404:
 *         description: Bière non trouvée.
 */
router.put("/:id", beersController.put);

/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Supprimer une bière par son ID
 *     description: ⚠️ supprimer la bières supprimera aussi la fiche détail associé à cette dernière.
 *     tags:
 *       - Beers
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la bière à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Bière supprimée avec succès.
 *       404:
 *         description: Bière non trouvée.
 */
router.delete("/:id", beersController.delete);
