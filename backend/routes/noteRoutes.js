import express from "express";
import Note from "../models/Note.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// All notes routes are protected - a valid JWT is required.
router.use(protect);

// @route   GET /api/notes
// @desc    Get all notes belonging to the logged-in user
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// @route   POST /api/notes
// @desc    Create a new note
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const note = await Note.create({ title, content, owner: req.user.id });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// @route   PUT /api/notes/:id
// @desc    Update a note (only if it belongs to the logged-in user)
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, owner: req.user.id });
    if (!note) return res.status(404).json({ message: "Note not found" });

    note.title = req.body.title ?? note.title;
    note.content = req.body.content ?? note.content;
    await note.save();

    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// @route   DELETE /api/notes/:id
// @desc    Delete a note (only if it belongs to the logged-in user)
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, owner: req.user.id });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

export default router;
