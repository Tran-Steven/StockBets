import "reflect-metadata"
import { DataSource } from "typeorm"
import { Account } from "./models/accountModel"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "owen",
    password: "himama123",
    database: "StockBets",
    entities: [Account],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        // no idea at this point
    })
    .catch((error) => console.log(error))

export default AppDataSource;