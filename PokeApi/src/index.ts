import express from 'express';
import bodyParser from 'body-parser';
import { userRouter } from './routers/user.router';
import session from 'express-session';
import { authRouter } from './routers/auth.router';

const app = express();

// Set up express to attach sessions
const sess =  {
    secret: 'potato',
    cookie: { secure: false},
    resave: false,
    saveUninitialized: false
};

app.use(session(sess));

// Set up bpody parser to convert JSON body to JS object and attach to req
app.use(bodyParser.json());


// Create logging middleware
app.use((req, res, next) => {
    console.log('headers: ', req.headers);
    console.log(`Request was made with URL: ${req.url}
    and method: ${req.method}`);
    next(); // Will pass the request on to search for the next piece of middleware
});

// allow cross origins
app.use((req, resp, next) => {
    console.log(req.get('host'));
    (process.env.MOVIE_API_STAGE === 'prod')
      ? resp.header('Access-Control-Allow-Origin', process.env.DEMO_APP_URL)
      : resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  
// Deal with all the users
app.use('/users', userRouter);

app.use('/auth', authRouter);
// app.get('/', (req, res) => {
//     res.send('Welcome');
// })

// app.get('/pokemon', (req, res) => {
//     res.send('Here are your pokemon');
// })

// app.get('/pokemon-moves', (req, res) => {
//     res.send('Here are all the available pokemon moves');
// })


app.listen(3000);
console.log('Application Started on Port: 3000');