const express = require('express');
const expressGQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGQL({
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening...');
});
