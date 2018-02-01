const contato = [
    { nomecontato: 'marcos mendes',  telefone: '88888888' },
    { nomecontato: 'jefferson',  telefone: '9999999' },
    { nomecontato: 'bruno',  telefone: '898989898' }
  ]

  exports.up = knex => knex("contato").insert(contato)

exports.down = knex => knex("contato").del()
  .whereIn("nomecontato", contato.map(e => e.nomecontato))