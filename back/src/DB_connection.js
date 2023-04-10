require('dotenv').config(); // importa los datos del archivo .env
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY } = process.env;
const UserModel = require('./models/User'); // para importar los modelos hay que ponerle si o si 'Model' al final
const FavoriteModel = require('./models/Favorite');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

// const sequelize = new Sequelize( // instancia de Sequelize
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
//    { logging: false, native: false }
// );

const sequelize = new Sequelize( // instancia de Sequelize
   DB_DEPLOY,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
UserModel(sequelize);
FavoriteModel(sequelize);

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models; // importo User y Favorite de la instancia models de sequelize

User.belongsToMany(Favorite, { through: 'user_favorites' }) // user_favorites es en el nombre de la tabla intermedia que relaciona a User con Favorite
Favorite.belongsToMany(User, { through: 'user_favorites' })

module.exports = {
   User,
   Favorite,
   conn: sequelize, // conn significa conectar
};
