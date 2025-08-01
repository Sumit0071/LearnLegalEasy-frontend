import axios from 'axios';

const API_ENDPOINT:string = process.env.VITE_PUBLIC_API_ENDPOINT || 'http://learn-legal-easy.com/api/query';

export const sendQuery = async ( query: string ) => {
    try {
        await axios.post( API_ENDPOINT, {
            query: query,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch ( error ) {
    console.error("Error sending the query: ", error);
    }
}
 