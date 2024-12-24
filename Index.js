const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 7000;
const userRouter = require('./Router/UserRouter');
const categoryRouter = require('./Router/CategoryRouter');
const subRouter = require('./Router/SubRouter');
const inventoryRouter = require('./Router/InventoryRouter');
const stockinRouter = require('./Router/StockInRouter');
const stockoutRouter = require('./Router/StockOutRouter');
const DemoRouter = require('./Router/DemoRouter');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello Webpage");
});

app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/subcategories", subRouter);
app.use("/api/inventories",inventoryRouter);
app.use("/api/items",stockinRouter);
app.use("/api/exits",stockoutRouter);
app.use("/api/demos",DemoRouter);

const db = 'mongodb link'
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    });

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});
