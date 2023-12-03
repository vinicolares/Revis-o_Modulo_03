const listarCadastros = (id) => {
  if (!id) {
    return "O campo ID é obrigatorio...";
  }
  const encontraRegistro = data.find((registro) => registro.id === id);
  if (!encontraRegistro) {
    return `Não há aluno no ID ${id}...`;
  }
  return encontraRegistro;
};

const listarAulas = (id) => {
  const encontraRegistro = data.find((registro) => registro.id === id);
  if (!encontraRegistro) {
    return `Não há aluno no ID ${id}...`;
  }
  if (encontraRegistro.cargo !== "Aluno") {
    return `As aulas são associadas somente a alunos`;
  }
  return encontraRegistro.aulas;
};
