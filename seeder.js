const mongoose = require("mongoose");
const { MONGODB } = require("./config.js");
const users = require("./data/users.js");
const Post = require("../../models/Post");
const checkAuth = require("../../util/check-auth");
const Order = require("./models/orderModel.js");
const connectDB = require("./config/db.js");
