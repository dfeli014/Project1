import express from 'express';
import { User } from '../models/user';
import { authMiddleware } from './auth.middleware';

const peter = new User(1, 'peter', 'password', 'peter');
const kyle = new User(2, 'kyle', 'password', 'kyle');
const users = [peter, kyle];

// We will assume all routes are defined with this router
// starts with '/users'
export const userRouter = express.Router();

// url: '/users' - find all
userRouter.get('', [
    authMiddleware,
    (req, res) => {
    res.json(users);
}]);

// '/users/:id - find a specific user
userRouter.get('/:id', (req, res) => {
    console.log(req.params);
    const user = users.find(ele => ele.id === +req.params.id);
    res.json(user);
});

userRouter.post('', (req, res) => {
    users.push(req.body);
    res.sendStatus(201);
});