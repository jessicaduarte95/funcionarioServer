interface FuncionarioInteface {
	nome: string;
	cargo: string;
	departamento: string;
}

export async function getFuncionarioService() {
	try {
		console.log('Get client');
	} catch (error) {
		console.error('Erro ao carregar dados.', error);
	}
}
export async function createFuncionarioService(data: FuncionarioInteface) {
	try {
		console.log('Creating client');
	} catch (error) {
		console.error('Erro ao adicionar funcionário.', error);
	}
}
