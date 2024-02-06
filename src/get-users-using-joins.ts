import { Client } from "pg";

const getUsers = async (userId : number) => {
    const client = new Client({
        connectionString : "postgresql://ashishsrivastava.bbdu:bZFRzrSa5n0s@ep-royal-fog-a53wfhib.us-east-2.aws.neon.tech/neondb?sslmode=require"
    });

    try {
        await client.connect();
    //     const query = `
    //     SELECT u.id, u.username, u.email , u.password , a.city, a.country, a.street, a.pincode
    //     FROM users u
    //     JOIN addresses a ON u.id = a.user_id
    //     WHERE u.id = $1
    // `;

    const query = `
    SELECT u.id, u.username, u.email , u.password , a.city, a.country, a.street, a.pincode , b.firstName , b.lastName
    FROM users u
    JOIN addresses && profileDetails a && b ON u.id = a.user_id
    WHERE u.id = $1
`;
    const result = await client.query(query, [userId]);

    if (result.rows.length > 0) {
        console.log('User and address found:', result.rows[0]);
        return result.rows[0];
    } else {
        console.log('No user or address found with the given ID.');
        return null;
    }
        
    } catch (error) {

    } finally {
        await client.end();
    }
}

getUsers(1);