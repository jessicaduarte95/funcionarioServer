interface FuncionarioInteface {
	nome: string;
	cargo: string;
	departamento: string;
}
export async function createFuncionarioService(data: FuncionarioInteface) {
	try {
		console.log('Creating client');
	} catch (error) {
		console.error('Erro ao inserir cliente.', error);
	}
}
