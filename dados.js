const data = [
  {
    id: 1,
    name: "Madeson Roth",
    email: "madesonroth@icloud.edu",
    cargo: "Professor",
  },
  {
    id: 2,
    name: "Madeson Roth",
    email: "madesonroth@icloud.edu",
    cargo: "Aluno",
    aulas: [
      {
        id: "1",
        nome: "Nulla facilisi.",
        Vista: "false",
      },
      {
        id: "2",
        nome: "imperdiet dictum",
        Vista: "true",
      },
      {
        id: "3",
        nome: "gravida mauris",
        Vista: "true",
      },
      {
        id: "4",
        nome: "nec ipsum.",
        Vista: "true",
      },
      {
        id: "5",
        nome: "vitae erat",
        Vista: "false",
      },
    ],
  },
  {
    id: 3,
    name: "Alison Negas",
    email: "alison@icloud.edu",
    cargo: "Aluno",
    aulas: [
      {
        id: "1",
        nome: "Nenuco Flocos",
        Vista: "false",
      },
      {
        id: "2",
        nome: "Biboca lison",
        Vista: "true",
      },
      {
        id: "3",
        nome: "gravida mauris",
        Vista: "true",
      },
    ],
  },
];

module.exports = {
  data,
};
