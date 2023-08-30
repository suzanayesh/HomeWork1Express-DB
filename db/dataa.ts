import 'reflect-metadata';
import express from 'express';
import { User } from './entity/user.js';
import { Data } from "typeorm";

const dataa= new Data({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'hw1',
  entities: [User],
  synchronize: true,
  logging: false,
});
 const connection = () =>{
dataa.initialize().then(() => {
    console.log("Connected to DB Successfuly !");
  }).catch(err => {
    console.error("Failed to connect DB: " + err);
  });
}
export default {dataa,connection};