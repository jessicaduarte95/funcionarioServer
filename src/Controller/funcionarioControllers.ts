import { Request, Response } from 'express';
import { getFuncionarioService, createFuncionarioService, deleteFuncionarioService, updateFuncionarioService } from '../Service/funcionarioService';

export async function getFuncionario(req: Request, res: Response) {
	try {
		const data: any = req.query;
		const response = await getFuncionarioService(data);
		return res.status(200).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
	}
}

export async function createFuncionario(req: Request, res: Response) {
	try {
		const data: any = req.body;
		const response = await createFuncionarioService(data);
		return res.status(201).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Erro ao adicionar funcionário. Por favor, tente novamente mais tarde!' });
	}
}

export async function updateFuncionario(req: Request, res: Response) {
	try {
		const data: any = req.body;
		const id: string = req.params.id;
		const response = await updateFuncionarioService(data, id);
		return res.status(201).json(response);
	} catch (error: any) {
		return res.status(500).json({ error: 'Erro ao atualizar dados. Por favor, tente mais tarde!' });
	}
}

export async function deleteFucionario(req: Request, res: Response) {
	try {
		const id: string = req.params.id;
		const data = await deleteFuncionarioService(id);
		return res.status(201).json(data);
	} catch (error: any) {
		return res.status(500).json({ error: 'Erro ao deletar cliente. Por favor, tente mais tarde!' });
	}
}
