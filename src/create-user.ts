import { Client } from 'pg';

// Async function to insert data into a table
async function insertData  () {
    const client = new Client({
        connectionString : "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });
    
    try {
        await client.connect()
        // const insertQuery = `INSERT INTO users (username , email , password) VALUES ('ash7q00asd7' , 'ashishsrivastava170071@asgmail.com' , 'abcde')`;
        const insertQuery = `INSERT INTO users (username , email , password) VALUES ($1 , $2, $3)`;
        const values = ["sd_ash7" , "ashish@yopmail.com" , "abcde"]
        const data = await client.query(insertQuery , values)
        console.log(data , "data");
        
    } catch (error) {
        console.log(error , "error");
        
    } finally {
        await client.end()
    }
}

insertData()