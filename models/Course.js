const mongoose = require("mongoose");

const CourseSchema = new Schema({
    name: {
        type: String,
        required: [true, "Kurs ad alanı boş bırakılamaz."],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Kurs açıklama alanı boş bırakılamaz."],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Course", CourseSchema);