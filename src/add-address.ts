import { Client } from "pg";


const addAddresses = async () => {
    const client = new Client({
        connectionString : "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });
    try {
        client.connect();
        const insertQuery = "INSERT INTO addresses (user_id , city , country , street , pincode) VALUES ($1 , $2 , $3 , $4 , $5)"
        const values = ["1" , "Lucknow" , "India" , "Gomti Nagar" , 225001]
        const query = await client.query(insertQuery , values);
        console.log(query , "query")
    } catch (error) {
        console.log(error);
    } finally {
        client.end();
    }
} 

addAddresses()