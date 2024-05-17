import mongoose, { Schema, Document, Model } from 'mongoose';

interface IFuncionario extends Document {
	nome: string;
	cargo: string;
	departamento: string;
	dataAdmissao: Date;
}

const funcionarioSchema: Schema<IFuncionario> = new Schema({
	nome: { type: String, required: true },
	cargo: { type: String, required: true },
	departamento: { type: String, required: true },
	dataAdmissao: { type: Date }
});

const Funcionario: Model<IFuncionario> = mongoose.model<IFuncionario>('Funcionario', funcionarioSchema);

export default Funcionario;
