const express = require('express');
const router = express.Router();
const Todo = require('../models/todo')


router.get('/', async (req, res) => {
    try {
        const todo = await Todo.find().select('-__v')
        res.json(todo)

    } catch (e) {

        res.status(500).json(e)
    }

})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findById(id).select('-__v')
        res.json(todo)
    } catch (e) {

        res.status(500).json(e)
    }

})


router.post('/', async (req, res) => {
    const { title, description, authors } = req.body
    const newTodo = new Todo(title, description, authors)
    try {
        await newTodo.save();
        res.json(newTodo)

    } catch (e) {

        res.status(500).json(e)
    }

})


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, authors } = req.body
    try {
        await Todo.findByIdAndUpdate(id, { title, description, authors })
        res.redirect(`/todo/${id}`)

    } catch (e) {

        res.status(500).json(e)
    }

})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Todo.deleteOne({ _id: id })
        res.json(true)
    } catch (e) {

        res.status(500).json(e)
    }

})



module.exports = router