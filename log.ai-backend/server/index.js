const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ObjectId } = require("mongodb");

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/logai", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Note Schema
const noteSchema = new mongoose.Schema({
    userId: { type: ObjectId, required: false },
    title: { type: String, required: true },
    description: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", noteSchema);

// CRUD operations for notes

// GET all notes
app.get("/notes", async (req, res) => {
    try {
        const notes = await Note.find();
        console.log('Fetched notes:', notes);
        res.json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// POST create a new note
app.post("/notes", async (req, res) => {
    try {
        if (!req.body.title) {
            return res.status(400).json({ message: "Title is required" });
        }
        const newNote = new Note({
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId
        });
        await newNote.save();
        console.log('Created new note:', newNote);
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// PUT update a note
app.put("/notes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedNote = await Note.findByIdAndUpdate(
            id, 
            { 
                ...req.body,
                updatedAt: Date.now()
            },
            { new: true }
        );
        if (!updatedNote) {
            console.warn('Note not found for update:', id);
            return res.status(404).json({ message: "Note not found" });
        }
        console.log('Updated note:', updatedNote);
        res.json({ message: "Note updated successfully", note: updatedNote });
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// DELETE a note
app.delete("/notes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) {
            console.warn('Note not found for deletion:', id);
            return res.status(404).json({ message: "Note not found" });
        }
        console.log('Deleted note:', deletedNote);
        res.json({ message: "Note deleted successfully", note: deletedNote });
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});