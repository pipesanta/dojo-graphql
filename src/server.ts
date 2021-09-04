import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';
import schema from './schema'
import { ApolloServer } from 'apollo-server-express';
import expressPlayGround from 'graphql-playground-middleware-express';



const app = express();
app.use(cors())
app.use(compression())


const servidor = new ApolloServer({
    schema,
    introspection: true
})

servidor.applyMiddleware({ app });


app.get('/', expressPlayGround({
    endpoint: "/graphql"
}));

const port = 5400

const httpServer = createServer(app);

httpServer.listen(
    { port },
    () => console.log('listen on port: ' + port)
)
