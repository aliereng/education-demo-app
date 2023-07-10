const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'kullanıcı ad alanı boş bırakılamaz.']
  },
  email: {
    type: String,
    required: [true, 'kullanıcı email alanı boş bırakılamaz.'],
    trim: true,
  },
  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    default: "student"
  },
  password: {
    type: String,
    require: [true, 'kullanıcı şifre alanı boş bırakılamaz.'],
  },
  courses:[
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Course'
    }
  ]
});

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) console.log("bcrypt hata");
    this.password = hash;
    next();
  })
});
module.exports = mongoose.model('User', UserSchema);
