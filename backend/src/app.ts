import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from "./routes/auth";
import apiRoutes from "./routes/photos";
import indexRoutes from "./routes/index";
import path from 'path';

const app: Application = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/', indexRoutes);

//Public files store folder
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;