import { Config } from "../types/configTypes";


const config:Config={
    development: {
        mongoURI: `mongodb+srv://geevarghesemvarghese:${encodeURIComponent('Varghese@0124')}@cluster3.lq8jewf.mongodb.net/?retryWrites=true&w=majority`,
        port: 3000,
        secretKey:'your-secret-key',
    },

production:{
    mongoURI:'hello',
    port:8080,
    secretKey:'your_production_secret_key',
},
};
export default config;