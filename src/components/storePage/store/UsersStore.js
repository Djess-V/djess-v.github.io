import { makeAutoObservable } from "mobx";
import { defaultUsers } from "../data/defaultData";

export default class UsersStore {
  constructor() {
    this._loggedIn = false;
    this._user = {};
    this._users = defaultUsers;
    makeAutoObservable(this);
  }

  setLoggedIn(bool) {
    this._loggedIn = bool;
  }

  setUser(user) {
    this._user = user;
  }

  setUsers(users) {
    this._users = users;
  }

  addUser(user) {
    this._users.push(user);
  }

  addOrder(order) {
    this._user.orders.push(order);
  }

  addPendingPurchase(pendingPurchase) {
    this._user.pendingPurchases.push(pendingPurchase);
  }

  addRating(rating) {
    this._user.ratings.push(rating);
  }

  deleteUser(email) {
    this._users = this.users.filter((user) => user.email !== email);
  }

  get loggedIn() {
    return this._loggedIn;
  }

  get user() {
    return this._user;
  }

  get users() {
    return this._users;
  }
}
