"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Async function to insert data into a table
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
        });
        try {
            yield client.connect();
            // const insertQuery = `INSERT INTO users (username , email , password) VALUES ('ash7q00asd7' , 'ashishsrivastava170071@asgmail.com' , 'abcde')`;
            const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2, $3)`;
            const values = ["sd_ash7", "ashish@yopmail.com", "abcde"];
            const data = yield client.query(insertQuery, values);
            console.log(data, "data");
        }
        catch (error) {
            console.log(error, "error");
        }
        finally {
            yield client.end();
        }
    });
}
insertData();
