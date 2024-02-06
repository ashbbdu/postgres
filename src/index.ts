import { Client } from 'pg';

// Async function to insert data into a table



const client = new Client({
    // host: 'localhost',
    // port: 5432,
    // database: 'postgres',
    // user: 'postgres',
    // password: 'mysecretpassword',
    // connectionString: "postgres://avnadmin:AVNS_4kMGOY154qVGgfT7kam@pg-3f03d66a-ashishsrivastava7007-8e39.a.aivencloud.com:26385/defaultdb?sslmode=require"
    connectionString : "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

// The syntax for creating table should be different search because everytime I am running this file , I am getting error for the tables which are alredy created


async function createUserTalbe() {
    await client.connect();
    try {
        const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
`)
        console.log(result, "result")
    } catch (error) {
        console.log(error, "error");

    }
}

async function createAddressTable () {
    try {
        const result = await client.query(`
        CREATE TABLE addresses (
            id SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100) NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        );
        `)
        console.log(result);
        
    } catch (error) {
        console.log(error , "error");
        
    } 
}

async function createProfileDetailsTable () {
    try {
        const result = await client.query(`
            CREATE TABLE profileDetails (
                id SERIAL PRIMARY KEY,
                user_id INTEGER NOT NULL,
                firstName VARCHAR(100) NOT NULL,
                lastName VARCHAR(100) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `)
        console.log(result);
        
    }
 catch (error) {
    console.log(error);
    
}
}

createProfileDetailsTable()
createAddressTable()
createUserTalbe()

