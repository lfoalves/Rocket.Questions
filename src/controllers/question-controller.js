const { format } = require('express/lib/response')
const { create } = require('./room-controller')

const Database = require('../db/config')

module.exports = {
  async index(req, res) {
    const db = await Database()

    //FORM MODAL ROOM recebe dados do action do formulário da Modal.

    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const rpassword = req.body.tpassword

    console.log(
      `room= ${roomId}, questionId = ${questionId}, action = ${action}, password = ${rpassword}`
    )

    /* verificar senha válida */
    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
    if (verifyRoom.pass == rpassword) {
      if (action == 'delete') {
        await db.run(`DELETE FROM questions WHERE id = ${questionId}`)
      } else if (action == 'check') {
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`)
      }
      res.redirect(`/room/${roomId}`)
    } else {
      res.render('pass-error', { roomId: roomId })
    }
  },

  async create(req, res) {
    const db = await Database()

    const question = req.body.tquestion
    const roomId = req.params.room

    console.log(question)

    //verifica se a questão inserida é vazia ou izual a nada
    nonequestion = question == 0 || question == ''
    console.log(nonequestion)

    if (nonequestion) {
      res.render('parts/404-questao')
    } else {
      await db.run(`INSERT INTO questions(
        title,
        room,
        read
      ) VALUES (
        "${question}",
        ${roomId},
        0
      )`)

      res.redirect(`/room/${roomId}`)
    }
  }
}
