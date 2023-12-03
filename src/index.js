//Usa o Node.js (require) para importar o modulo framework express para criar um servidor web.
const express = require("express");
//Cria uma instancia do aplicação express
const app = express();
const { data } = require("../dados");
const PORTA = 3000;
app.use(express.json());

app.get("/aulas/:id", (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).json({ mensagem: "O ID deve ser um numero" });
  }
  const encontraRegistro = data.find((registro) => registro.id === Number(id));
  if (!encontraRegistro) {
    return res.status(404).json(`Não há aluno no ID ${id}...`);
  }
  if (encontraRegistro.cargo !== "Aluno") {
    return res.status(403).json("As aulas estão associadas somente a alunos");
  }
  return res.json(encontraRegistro);
});

app.listen(PORTA, () => console.log("Server ON"));
