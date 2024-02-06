import { Client } from "pg";


const profileDetails = async () => {
    const client = new Client({
        connectionString : "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });
    try {
        await client.connect();
        const profileDetailsQuery = `INSERT INTO profileDetails (user_id , firstName , lastName) VALUES ($1 , $2 , $3)`;
        const values = [1 , "Ashish" , "Srivastava"];
        const profileDetails = await client.query(profileDetailsQuery , values)
        console.log(profileDetails);
        
    } catch(error) {
        console.log(error);   
    } finally {
        await client.end();
    }
}

profileDetails();