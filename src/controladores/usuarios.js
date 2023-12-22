const conexaoPg = require("../configuracoes/bancoDeDados");
const gerarToken = require("../utilitarias/gerarToken");
const verificarSenha = require("../utilitarias/verificarSenha");
const bcrypt = require("bcrypt");

const logarUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const texto = `
      SELECT * FROM usuarios
      WHERE email=$1;
    `;
    const valores = [email];
    const {
      rowCount: quantidadeDeUsuariosCadastrados,
      rows: usuariosCadastrados,
    } = await conexaoPg.query(texto, valores);
    if (quantidadeDeUsuariosCadastrados === 0) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }
    const usuarioCadastrado = usuariosCadastrados[0];
    const senhaCriptografada = usuarioCadastrado.senha;
    const senhaConfere = verificarSenha(senha, senhaCriptografada);
    if (!senhaConfere) {
      return res.status(400).json({ mensagem: "E-mail ou senha inválidos" });
    }
    const idUsuarioLogado = usuarioCadastrado.id;
    const token = gerarToken(idUsuarioLogado);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.mensage);
    return res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ mensagem: "Todos os campos são obrigatório" });
    }
    const texto = `
      INSERT INTO usuarios (nome, email, senha)
      VALUES ($1, $2, $3);
    `;
    const valores = [nome, email, senha];
    await conexaoPg.query(texto, valores);
    return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ mensagem: "Erro interno no servidor" });
  }
};
module.exports = {
  cadastrarUsuario,
  logarUsuario,
};
