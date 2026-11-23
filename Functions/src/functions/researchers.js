const { app } = require('@azure/functions');
const sql = require('mssql');

const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    options: {
        encrypt: true
    }
};

app.http('researchers', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const pool = await sql.connect(dbConfig);

            const result = await pool.request().query(
                'SELECT * FROM Researchers'
            );

            return {
                status: 200,
                jsonBody: result.recordset
            };

        } catch (error) {
            context.error(error);

            return {
                status: 500,
                jsonBody: { error: 'Database connection failed' }
            };
        }
    }
});