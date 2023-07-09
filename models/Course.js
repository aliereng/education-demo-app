const mongoose = require('mongoose');
const slugify = require('slugify');

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Kurs ad alanı boş bırakılamaz.'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Kurs açıklama alanı boş bırakılamaz.'],
    trim: true,
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category"
  }
});

CourseSchema.pre('save', function (next) {
  this.slug = slugify(this.name, {
    replacement: '-', // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: 'vi', // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });
  next();
});
module.exports = mongoose.model('Course', CourseSchema);
