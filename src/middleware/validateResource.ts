/**
 * When request coming, schema will be provided in middleware and it will validate the request agains that schema
 * 
 */
import {Request, Response, NextFunction} from 'express';
import {AnyZodObject} from 'zod'
const validate = (schema) => (req:Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        })
    } catch (error: any) {
        return res.status(400).send(error.console.errors);        
    }
}