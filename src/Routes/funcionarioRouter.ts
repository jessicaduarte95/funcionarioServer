import { Router } from 'express';
import { getFuncionario, createFuncionario, updateFuncionario, deleteFucionario } from '../Controller/funcionarioControllers';

const router = Router();

export default router
    .get('/api/employees', getFuncionario)
    .post('/api/employees', createFuncionario)
    .delete('/api/employees/:id', deleteFucionario)
    .put('/api/employees/:id', updateFuncionario);
