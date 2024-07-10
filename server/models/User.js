import mongoose from "mongoose";

const UserScema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 30,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 30,
        },
        email: {
            type: String,
            require: true,
            unique: true,

        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
        picturePath: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: []
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    }, {timestamps: true}
);

const User = mongoose.model("User", UserScema);
export default User;
