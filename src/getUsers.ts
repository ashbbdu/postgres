import { Client } from "pg";



const getUsers = async (email : string) => {
    const client = new Client({
        connectionString : "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });
    try {
        await client.connect()
        const query =  `SELECT * FROM users WHERE email = $1`
        const emailValue = [email]
        const result = await client.query(query , emailValue);
        console.log(result , "user");
        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
          } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
          }
        
    } catch (error) {
        console.log(error);
        
    } finally {
        await client.end()
    }
}


getUsers("ashish@yopmail.com");
