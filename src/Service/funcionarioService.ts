import Funcionario from '../Model/Funcionario';

interface FuncionarioInterface {
	nome: string;
	cargo: string;
	departamento: string;
	dataAdmissao: string;
}

export async function getFuncionarioService() {
	try {
		const response = await Funcionario.find();
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

export async function deleteFuncionarioService(id: string) {
	try {
		const response = await Funcionario.deleteOne({ _id: id });

		return response;
	} catch (error) {
		console.error('Erro ao adicionar funcionário.', error);
	}
}
