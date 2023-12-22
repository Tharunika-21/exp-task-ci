const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./db/db');
const userRouter = require('./router/userRouter')
const expenseRouter = require('./router/expenseRouter')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth',userRouter)
app.use('/expenses',expenseRouter)
connectDb();

const port = 4000 || process.env.PORT_NO ;
app.listen(port , ()=>{
        console.log(`Server on :- ${port}`);
})
// require('dotenv').config();

// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDb = require('./db/db');
// const userRouter = require('./router/userRouter');
// const expenseRouter = require('./router/expenseRouter');
// const app = express();

// // Allow requests from any origin and dynamic ports
// const corsOptions = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use('/auth', userRouter);
// app.use('/expenses', expenseRouter);
// connectDb();

// const port = process.env.PORT_NO || process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server on: http://localhost:${port}`);
// });
