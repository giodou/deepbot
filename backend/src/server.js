const database = require('./db')
const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Deepbot's backend is runing at PORT:${process.env.PORT}`);
})