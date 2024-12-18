import { Request, Response } from "express";
import { pool } from "../db/config";
import { User } from "../db/models/user";

export const usersController = {
    getAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await pool.query("SELECT * FROM user");

            if (result.rows.length === 0) {
                res.status(404).json({ error: "Users not found" });
                return;
            }

            res.status(200).json({ users: result.rows });
        } catch (error) {
            console.error("Error while getting users", error);
            res.status(500).json({ error: "Error while getting users" });
        }
    },
    getOne: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const result = await pool.query("SELECT * FROM user WHERE id = $1", [id]);

            if (result.rows.length === 0) {
                res.status(404).json({ error: `User ${id} not found` });
                return;
            }

            res.status(200).json({ user: result.rows[0] });
        } catch (error) {
            console.error(`Error while getting user ${id}`, error);
            res.status(500).json({ error: `Error while getting user ${id}` });
        }
    },
    post: async (req: Request, res: Response): Promise<void> => {
        const { first_name, last_name, email, password }: User = req.body;

        if (!first_name || !last_name || !email || !password ) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        try {
            const result = await pool.query(
                `INSERT INTO user (first_name, last_name, email, password)
                VALUES ($1, $2, $3, $4)
                RETURNING *`,
                [first_name, last_name, email, password]
            );

            res.status(201).json({ user: result.rows[0] });
        } catch (error) {
            console.error("Error while creating the user", error);
            res.status(500).json({ error: "Error while creating the user" });
        }
    },
    put: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { first_name, last_name, email, password }: Partial<User> = req.body;

        try {
            const userExists = await pool.query("SELECT * FROM user WHERE id = $1", [id]);
            if (userExists.rows.length === 0) {
                res.status(404).json({ error: `User ${id} not found` });
                return;
            }

            const result = await pool.query(
                `UPDATE user 
                SET 
                    first_name = COALESCE($1, first_name), 
                    last_name = COALESCE($2, last_name), 
                    email = COALESCE($3, email), 
                    password = COALESCE($4, password) 
                WHERE id = $5
                RETURNING *`,
                [first_name, last_name, email, password, id]
            );

            res.status(200).json({ user: result.rows[0] });
        } catch (error) {
            console.error(`Error while updating user ${id}`, error);
            res.status(500).json({ error: `Error while updating user ${id}` });
        }
    },
    delete: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            const userExists = await pool.query("SELECT * FROM user WHERE id = $1", [id]);
            if (userExists.rows.length === 0) {
                res.status(404).json({ error: `User ${id} not found` });
                return;
            }

            await pool.query("DELETE FROM user WHERE id = $1", [id]);

            res.status(200).json({ message: `User ${id} deleted successfully` });
        } catch (error) {
            console.error(`Error while deleting user ${id}`, error);
            res.status(500).json({ error: `Error while deleting user ${id}` });
        }
    },
};