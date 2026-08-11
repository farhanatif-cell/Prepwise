const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");

dotenv.config();

const questions = [
  {
    question: "What is JavaScript?",
    category: "JavaScript",
    difficulty: "Easy",
    answer:
      "JavaScript is a programming language used to make web pages interactive and dynamic.",
    company: "General",
  },
  {
    question: "What is the difference between let, var, and const?",
    category: "JavaScript",
    difficulty: "Medium",
    answer:
      "var is function scoped, while let and const are block scoped. const cannot be reassigned after declaration.",
    company: "General",
  },
  {
    question: "What is React?",
    category: "React",
    difficulty: "Easy",
    answer:
      "React is a JavaScript library used to build user interfaces, especially single-page applications.",
    company: "General",
  },
  {
    question: "What is a component in React?",
    category: "React",
    difficulty: "Easy",
    answer:
      "A component is a reusable piece of UI that can contain its own structure, logic, and styling.",
    company: "General",
  },
  {
    question: "What is Node.js?",
    category: "Node.js",
    difficulty: "Easy",
    answer:
      "Node.js is a JavaScript runtime that allows JavaScript to run outside the browser.",
    company: "General",
  },
  {
    question: "What is Express.js?",
    category: "Node.js",
    difficulty: "Easy",
    answer:
      "Express.js is a web framework for Node.js used to create APIs and web servers.",
    company: "General",
  },
  {
    question: "What is MongoDB?",
    category: "MongoDB",
    difficulty: "Easy",
    answer:
      "MongoDB is a NoSQL database that stores data in flexible JSON-like documents.",
    company: "General",
  },
  {
    question: "What is a primary key?",
    category: "Database",
    difficulty: "Easy",
    answer:
      "A primary key is a unique identifier for each record in a database table.",
    company: "General",
  },
  {
    question: "What is OOP?",
    category: "Java",
    difficulty: "Easy",
    answer:
      "Object-Oriented Programming is a programming approach based on objects and classes.",
    company: "General",
  },
  {
    question: "What are the four main principles of OOP?",
    category: "Java",
    difficulty: "Medium",
    answer:
      "The four main principles are Encapsulation, Abstraction, Inheritance, and Polymorphism.",
    company: "General",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Question.deleteMany();

    await Question.insertMany(questions);

    console.log("Questions added successfully");

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
};

seedDatabase();