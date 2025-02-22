/** db.js
 * Handles SQL queries
 */

import { Router } from 'express';
import mysql from 'mysql2';

const router = Router();

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

db.connect((err) => {
    if (err) {
        console.error('Could not connect to database:', err);
        return;
    }
    console.log(`Connected to MySQL database as ID ${db.threadId}`);
});

/* BOOK Queries */
router.get('/books', (req, res) => {
    const query = 'SELECT * FROM books';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query failed' });
            return;
        }
        res.json(results);
    });
});


/* SITE queries */
router.get('/sites', (req, res) => {
    const query = 'SELECT * FROM sites';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query failed' });
            return;
        }
        res.json(results);
    });
});

/* PROJECT queries */
router.get('/projects', (req, res) => {
    const query = 'SELECT * FROM projects';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database query failed' });
            return;
        }
        res.json(results);
    });
});

export default router;
