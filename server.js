const express = require("express")
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema")

const app = express();

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

const port = process.env.PORT || 4040
app.listen(port, () => console.log(`server is running on port : ${port}`));