const mongoose = require('mongoose')
const Todo = mongoose.model('todos')

module.exports = (app) => {
  app.get(`/api/todo/:id`, async (req, res) => {
    const { id } = req.params;

    let todo = await Todo.findById(id)

    return res.status(202).send(todo)
  });

  app.get("/api/todo", async (req, res) => {
    let todos = await Todo.find({})
    return res.status(200).send(todos);
  });

  app.post(`/api/todo`, async (req, res) => {
    let todo = await Todo.create(req.body);
    return res.status(201).send(todo)
  })

  app.put(`/api/todo`, async (req, res) => {
    let todo = await Todo.updateOne({_id: req.body._id}, req.body)

    return res.status(202).send(todo)
  });

  app.delete(`/api/todo/:id`, async (req, res) => {
    const { id } = req.params;
    let todo = await Todo.deleteOne({_id: id});

    return res.status(202).send(todo)
  })
}