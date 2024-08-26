const mongoose = require('mongoose');
const { Schema, model } = mongoose;
require('dotenv').config();

// Enums in Mongoose can be defined using strings
mongoose.connect(process.env.DATABASE_URL).then((data) => {
    console.log("Connected to database")
})
const TypeEnum = {
    BUY: 'buy',
    RENT: 'rent',
};

const PropertyEnum = {
    APARTMENT: 'apartment',
    HOUSE: 'house',
    CONDO: 'condo',
    LAND: 'land',
};

// User Schema
const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    savedPosts: [{ type: Schema.Types.ObjectId, ref: 'SavedPost' }],
    chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
});

// Post Schema
const PostSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String] },
    address: { type: String, required: true },
    city: { type: String, required: true },
    bedroom: { type: Number, required: true },
    bathroom: { type: Number, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    type: { type: String, enum: Object.values(TypeEnum), required: true },
    property: { type: String, enum: Object.values(PropertyEnum), required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    postDetail: { type: Schema.Types.ObjectId, ref: 'PostDetail' },
    savedPosts: [{ type: Schema.Types.ObjectId, ref: 'SavedPost' }],
    desc: { type: String, required: true },
    utilities: { type: String },
    pet: { type: String },
    income: { type: String },
    size: { type: Number },
    school: { type: Number },
    bus: { type: Number },
    restaurant: { type: Number },

});

// PostDetail Schema
// const PostDetailSchema = new Schema({
//     desc: { type: String, required: true },
//     utilities: { type: String },
//     pet: { type: String },
//     income: { type: String },
//     size: { type: Number },
//     school: { type: Number },
//     bus: { type: Number },
//     restaurant: { type: Number },
//     post: { type: Schema.Types.ObjectId, ref: 'Post', required: true, unique: true },
// });

// SavedPost Schema
const SavedPostSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
    versionKey: false,
});

// Chat Schema
const ChatSchema = new Schema({
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    seenBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    lastMessage: { type: String },
});

// Message Schema
const MessageSchema = new Schema({
    text: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
    createdAt: { type: Date, default: Date.now },
});

// Registering Models
const User = model('User', UserSchema);
const Post = model('Post', PostSchema);
// const PostDetail = model('PostDetail', PostDetailSchema);
const SavedPost = model('SavedPost', SavedPostSchema);
const Chat = model('Chat', ChatSchema);
const Message = model('Message', MessageSchema);

module.exports = {
    User,
    Post,
    // PostDetail,
    SavedPost,
    Chat,
    Message,
};
