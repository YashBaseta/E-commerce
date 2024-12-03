const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require("./routes/auth/auth-routes")
const adminProductsRouter = require("../server/routes/admin/products-routes")
const shopProductsRouter = require("../server/routes/shop/products-routes")


// connect DB

mongoose.connect("mongodb+srv://test:test123@cluster0.ywb4r.mongodb.net/").then(() => console.log("connect DB")).catch((console.error()))


const app = express()
const PORT = process.env.PORT || 5000;
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );





app.use(cookieParser())
app.use(express.json())
app.use('/api/auth',authRouter)
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/shopping/productlist", shopProductsRouter);

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
