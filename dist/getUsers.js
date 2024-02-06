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
const getUsers = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client({
        connectionString: "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });
    try {
        yield client.connect();
        const query = `SELECT * FROM users WHERE email = $1`;
        const emailValue = [email];
        const result = yield client.query(query, emailValue);
        console.log(result, "user");
        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        }
        else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield client.end();
    }
});
getUsers("ashish@yopmail.com");
