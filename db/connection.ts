import {Sequelize} from 'sequelize';

const db = new Sequelize('tsnodemysql', 'root', '123456', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3307
    //logging: false
});

export default db;