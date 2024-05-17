import { Request, Response } from 'express';
// import { createFuncionarioService } from '../Service/funcionarioService';

export async function getFuncionario(req: Request, res: Response) {
	try {
		// const cliente = await getClienteService();
		return res.status(200).json();
	} catch (error: any) {
		return res.status(500).json({ error: 'Por favor, tente mais tarde!' });
	}
}

export async function createFuncionario(req: Request, res: Response) {
	console.log('Chegou controller!');
	try {
		// const data: any = req.body;
		// const create = await createClienteService(data);
		return res.status(201).json();
	} catch (error: any) {
		return res.status(500).json({ error: 'Erro ao adicionar funcionário. Por favor, tente novamente mais tarde!' });
	}
}

export async function updateFuncionario(req: Request, res: Response) {
	try {
		// const data: any = req.body;
		// const id: any = req.params.id;
		// const cliente = await updateClienteService(data, id);
		return res.status(201).json();
	} catch (error: any) {
		return res.status(500).json({ error: 'Erro ao atualizar dados. Por favor, tente mais tarde!' });
	}
}

export async function deleteFucionario(req: Request, res: Response) {
	try {
		// const id: any = req.params.id;
		// const cliente = await deleteClienteService(id);
		return res.status(201).json();
	} catch (error: any) {
		return res.status(500).json({ error: 'Erro ao deletar cliente. Por favor, tente mais tarde!' });
	}
}