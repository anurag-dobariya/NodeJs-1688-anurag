const joi = require("joi");
const dotenv = require("dotenv");

dotenv.config({path : "./env"});

// ========== creating schema for env vars ==========
const envVarsSchema = joi.object({
    PORT:joi.number().default(3000),
    MONGODDB_URL: joi.string().trim().description("Mongodb url"),
}).unknown();

const {value:envVars , error} = envVarsSchema
.prefs({errors:{label : "key"}})
.validate(process.env);

if(error){
    console.log("config error: " , error);
    process.exit(1);
}


module.exports={
    port:envVars.PORT,
    mongodb:{
        url:envVars.MONGODDB_URL,
        options:{
            useNewUrlParser : true,
            useUnifiedTopology : true
        }
    }
}


