const mongoose = require('mongoose');

const connectDatabase = async () => {

    await mongoose.connect(process.env.MongoDB_URL)
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
