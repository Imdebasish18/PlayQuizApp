const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  qs: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },
  option4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Question = new mongoose.model("Question", questionSchema);
const ComputerOrganization = new mongoose.model(
  "ComputerOrganization",
  questionSchema
);
const ProgrammingUsingC = new mongoose.model(
  "ProgrammingUsingC",
  questionSchema
);
const DSA = new mongoose.model("DSA", questionSchema);
const Webdev = new mongoose.model("Webdev", questionSchema);
const OS = new mongoose.model("OS", questionSchema);
const Networking = new mongoose.model("Networking", questionSchema);
const CloudComputing = new mongoose.model("CloudComputing", questionSchema);
const MachineLearning = new mongoose.model("MachineLearning", questionSchema);
const Bollywood = new mongoose.model("Bollywood", questionSchema);
const Hollywood = new mongoose.model("Hollywood", questionSchema);
const Tollywood = new mongoose.model("Tollywood", questionSchema);
const India = new mongoose.model("India", questionSchema);
const Europe = new mongoose.model("Europe", questionSchema);
const USA = new mongoose.model("USA", questionSchema);

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  Question,
  ComputerOrganization,
  ProgrammingUsingC,
  User,
  DSA,
  Webdev,
  OS,
  Networking,
  CloudComputing,
  MachineLearning,
  Bollywood,
  Hollywood,
  Tollywood,
  India,
  Europe,
  USA,
};
