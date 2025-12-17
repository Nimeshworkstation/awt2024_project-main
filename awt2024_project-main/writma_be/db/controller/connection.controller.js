import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const uri = `mongodb://mongodb:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

mongoose.connect(uri);
const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose connect to ' + uri);
});

db.on('error', (err) => {
  console.log('Mongoose connect error ' + err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

function gracefulShutdown(msg, cb) {
  db.close(() => {
    console.log('Mongoose disconnecetd using ' + msg);
    cb();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.once('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

export {
  db
}
