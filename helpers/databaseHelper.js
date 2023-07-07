const mongoose = require('mongoose');

const connectDatabase = async () => {

    await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.o1smq.mongodb.net/educationDB?retryWrites=true&w=majority")
        .then(() => {
            console.log("veritabanı bağlantısı başarılı")
        })
        .catch((err) => {
            console.log("veritabanı bağlantısı başarısız " + err);

        });
}

module.exports = {
    connectDatabase
}