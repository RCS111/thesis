const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  fullName: {
    first: {
      type: String,
      require: true,
    },
    last: {
      type: String,
      require: true,
    },
    middle: {
      type: String,
      require: true,
    },
    extension: {
      type: String,
      require: true,
    },
  },
  sex: {
    type: String,
    require: true,
  },
  address: {
    houseNo: {
      type: String,
      require: true,
    },
    blkNo: {
      type: String,
      require: true,
    },
    lotNo: {
      type: String,
      require: true,
    },
    purokNo: {
      type: String,
      require: true,
    },
    street: {
      type: String,
      require: true,
    },
  },
  startyear: {
    type: Number,
    require: true,
  },
  civilStatus: {
    type: String,
    require: true,
  },
  birthDay: {
    date: {
      type: String,
      require: true,
    },
    place: {
      type: String,
      require: true,
    },
  },
  contactNumber: {
    contact1: {
      type: Number,
      require: true,
    },
    contact2: {
      type: Number,
    },
  },
  vaccinationStatus: {
    type: Number,
    require: true,
  },
  dateCreated: {
    type: String,
    require: true,
  },
  approvalDate: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
