import Funcionario from '../Model/Funcionario';

interface FuncionarioInterface {
	nome: string;
	cargo: string;
	departamento: string;
	dataAdmissao: string;
}

export async function getFuncionarioService(data: { nome: string; cargo: string; departamento: string }) {
	try {
		const response = await Funcionario.find({
			nome: { $regex: '.*' + data.nome + '.*', $options: 'i' },
			cargo: { $regex: '.*' + data.cargo + '.*', $options: 'i' },
			departamento: { $regex: '.*' + data.departamento + '.*', $options: 'i' }
		});
		return response;
	} catch (error) {
		console.error('Erro ao carregar dados.', error);
	}
}
export async function createFuncionarioService(data: FuncionarioInterface) {
	try {
		const createFuncionario = {
			nome: data.nome,
			cargo: data.cargo,
			departamento: data.departamento,
			dataAdmissao: data.dataAdmissao
		};
		const response = await Funcionario.create(createFuncionario);

		return response;
	} catch (error) {
		console.error('Erro ao adicionar funcionário.', error);
	}
}

export async function updateFuncionarioService(data: FuncionarioInterface, id: string) {
	try {
		await Funcionario.findOneAndUpdate({ _id: id }, data);
		const dataFilter = {
			nome: '',
			cargo: '',
			departamento: ''
		};
		return getFuncionarioService(dataFilter);
	} catch (error) {
		console.error('Erro ao adicionar funcionário.', error);
	}
}

export async function deleteFuncionarioService(id: string) {
	try {
		const response = await Funcionario.deleteOne({ _id: id });

		return response;
	} catch (error) {
		console.error('Erro ao adicionar funcionário.', error);
	}
}
