import express from 'express';

type Request = express.Request;
type Response = express.Response;
import connection from '../routes/db.ts';

export const getAll = (req: Request, res: Response) => {
    connection.query('SELECT * FROM Productos', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
};

