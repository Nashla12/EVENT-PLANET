import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import DB from './db';
import Prooveedor from './modelo';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); 

app.get('/proveedores', async (req, res) => {
    try {
        const prove = await Prooveedor.findAll();
        res.json(prove);
    } catch (error) {
        console.error('Error al obtener empleados:', error);
        res.status(500).json({ error: 'Error al obtener los empleados' });
    }
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
