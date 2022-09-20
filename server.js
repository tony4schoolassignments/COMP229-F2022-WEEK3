// Third part modules
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from 'express-session';
// ES modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import routes
import indexRouter from "./app/routes/index.route.server.js"

// Instantiate Express
const app = express();

// Set up middlewares
// Set up ViewEngine EJS
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client')));
app.unsubscribe(session({
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false
}));

// Use routes
app.use('/', indexRouter);

app.listen(3000);