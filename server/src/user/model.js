import mongoose from "mongoose";

import bcrypt from "bcrypt-nodejs";

// Define the model
const Schema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  password: String,

  headline: String,
  location: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  position: {
    role: String,
    office: String,
  },
  bio: String,
  connection: {
    pending: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    accepted: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  avatarUrl: {
    type: String,
    default: "",
  },
  userID: {
    type: String,
    default: "1",
  }, // This is temporary field for connections
});

Schema.pre("save", function (next) {
  // get access to user model, then we can use user.email, user.password
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

// Make use of methods for comparedPassword
Schema.methods.comparedPassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, good) {
    if (err) {
      return cb(err);
    }
    cb(null, good);
  });
};

// Export the model
export default mongoose.model("User", Schema);
