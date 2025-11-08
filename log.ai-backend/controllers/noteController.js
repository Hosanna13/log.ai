const Note = require('../models/note');

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
};

exports.createNote = async (req, res) => {
    try { 
        const {title, description, userId} = req.body;
        if(!title){
            return res.status(400).json({ message: 'Title is required' });
        }

        const newNote = await Note.create({ title, description, userId});
        res.status(201).json(newNote);

    }
    catch(error) {
        res.status(500).json({ message: 'Error creating note' });
    }
};

exports.updateNote = async (req, res) => {
    try {
        const updateNote = await Note.findByIdAndUpdate( req.params.id, req.body, { new: true });
        if (!updateNote) {
            return res.status(404).json({ message: 'Note not found' });
        }
        res.json(updateNote);

    } catch (error) {
        res.status(500).json({ message: 'Error updating note' });
    }
};