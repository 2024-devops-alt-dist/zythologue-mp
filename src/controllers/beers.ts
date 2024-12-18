import { Request, Response } from "express";
import { pool } from "../db/config";
import { Beer } from "../db/models/beer";

export const beersController = {
    getAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await pool.query("SELECT * FROM beer");

            if (result.rows.length === 0) {
                res.status(404).json({ error: "Beers not found" });
                return;
            }

            res.status(200).json({ beers: result.rows });
        } catch (error) {
            console.error("Error while getting beers", error);
            res.status(500).json({ error: "Error while getting beers" });
        }
    },
    getOne: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const result = await pool.query("SELECT * FROM beer WHERE id = $1", [id]);

            if (result.rows.length === 0) {
                res.status(404).json({ error: `Beer ${id} not found` });
                return;
            }

            res.status(200).json({ beer: result.rows[0] });
        } catch (error) {
            console.error(`Error while getting beer ${id}`, error);
            res.status(500).json({ error: `Error while getting beer ${id}` });
        }
    },
    post: async (req: Request, res: Response): Promise<void> => {
        const { name, description, abv, organic }: Beer = req.body;

        if (!name || !description || !abv || !organic) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        try {
            const result = await pool.query(
                `INSERT INTO beer (name, description, abv, organic)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *`,
                [name, description, abv, organic]
            );

            res.status(201).json({ beer: result.rows[0] });
        } catch (error) {
            console.error("Error while creating the beer", error);
            res.status(500).json({ error: "Error while creating the beer" });
        }
    },
    put: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { name, description, abv, organic}: Partial<Beer> = req.body;

        try {
            const beerExists = await pool.query("SELECT * FROM beer WHERE id = $1", [id]);
            if (beerExists.rows.length === 0) {
                res.status(404).json({ error: `Beer ${id} not found` });
                return;
            }

            const result = await pool.query(
                `UPDATE beer 
                SET 
                    name = COALESCE($1, name), 
                    description = COALESCE($2, description), 
                    abv = COALESCE($3, abv), 
                    organic = COALESCE($4, organic)
                WHERE id = $7
                RETURNING *`,
                [name, description, abv, organic, id]
            );

            res.status(200).json({ beer: result.rows[0] });
        } catch (error) {
            console.error(`Error while updating beer ${id}`, error);
            res.status(500).json({ error: `Error while updating beer ${id}` });
        }
    },
    delete: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            const beerExists = await pool.query("SELECT * FROM beer WHERE id = $1", [id]);
            if (beerExists.rows.length === 0) {
                res.status(404).json({ error: `Beer ${id} not found` });
                return;
            }

            await pool.query("DELETE FROM beer WHERE id = $1", [id]);

            res.status(200).json({ message: `Beer ${id} deleted successfully` });
        } catch (error) {
            console.error(`Error while deleting beer ${id}`, error);
            res.status(500).json({ error: `Error while deleting beer ${id}` });
        }
    },
};