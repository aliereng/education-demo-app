const mongoose = require('mongoose');
const slugify = require("slugify");
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'kurs alan adı zorunludur.']
    },
    slug: {
        type:String,
        unique:true,
    },

});


CategorySchema.pre('save', function (next) {
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
module.exports = mongoose.model('Category', CategorySchema);