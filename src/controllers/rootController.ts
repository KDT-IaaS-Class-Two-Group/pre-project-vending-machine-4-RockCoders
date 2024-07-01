// * request, response 모듈   
import path from 'path';
import { Request, Response } from 'express';
import __dirname from '../modules/__dirname.js';
import ReadData from '../DB/modules/manipulation/select/ReadData.js';
import dbPath from '../DB/db.js';

export const home = ((req: Request, res:Response) => {
  return res.sendFile(path.join(__dirname, "public/index.html"));
});

export const products = ((req:Request, res:Response) => {
  const readData = new ReadData(dbPath);
  readData.readRecordsAll('products', false)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    });
  readData.close();
})