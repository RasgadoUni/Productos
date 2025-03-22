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

export const update = (req: Request, res: Response) => {
    const {ID} = req.params;
    const { Nombre, Descripcion, Precio, Categoria} = req.body;
   
        const query = 'UPDATE Productos SET Nombre = ?, Descripcion = ?, Precio = ?, Categoria = ? WHERE ID = ?';
        connection.query(query, [Nombre, Descripcion, Precio, Categoria, ID], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Se actualizo bien' });
    });
};

export const insert = (req: Request, res: Response) => {
    const {ID, Nombre, Descripcion, Precio, Categoria} = req.body;
   
        const query = 'INSERT INTO Productos (ID, Nombre, Descripcion, Precio, Categoria) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [ID, Nombre, Descripcion, Precio, Categoria], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'insercion correcta' });
    });
};

export const elimina = (req: Request, res: Response) => {
    const { ID } = req.params;
    
   
        const query = 'DELETE FROM Productos WHERE ID = ?';
        connection.query(query, [ID], (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'Se elimino bien' });
    });
};
