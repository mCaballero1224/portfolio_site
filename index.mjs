/* index.mjs */

'use strict';

import express from 'express';
import fetch from 'node-fetch';
import asyncHandler from 'express-async-handler';
import mysql from 'mysql2';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
import dbRouter from './routes/db.mjs';

const app = express();
const PORT = process.env.PORT;

// Get current directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

/**
 * Error handling middleware
 * @param error
 * @param req
 * @param res
 * @param next
 */
app.use((error, req, res, next) => {
    console.log(`Uhandled error\n${error}`);
    console.log(`URL = ${req.originalUrl}, method = ${req.method}`);
    res.send('500 - Server Error');
});

app.use('/db', dbRouter);

// Home Page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

// About Page
app.get('/about', (req, res) => {
    res.render('about');
});

// Blog Page
app.get('/blog', (req, res) => {
    res.render('blog');
});

// Contact Page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Projects Page
app.get('/projects', (req, res) => {
    res.render('projects');
});


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
