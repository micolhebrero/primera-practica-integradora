import  express  from 'express';
import usersRouter from './routes/users.route.js';
import handlebars from 'express-handlebars';
import fileDirName from './utils.js';
import viewsRouter from './routes/views.route.js';
import coursesRouter from './routes/courses.route.js';

const {__dirname} = fileDirName(import.meta);

const app = express();


app.engine('handlebars', handlebars.engine() );
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', viewsRouter);
app.use('/api/users', usersRouter);
app.use('/api/courses', coursesRouter);


app.listen(8080);
