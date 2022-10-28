const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE = process.env.DATABASE_URL || '';

(async () => {
    try {
        await mongoose.connect(DATABASE);
        console.log('La base de datos ha sido conectada con exito');
    } catch (error) {
        console.log(error);
    }
})();

module.exports = mongoose;