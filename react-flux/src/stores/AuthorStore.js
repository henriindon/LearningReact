import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
let _authors = [];

class AuthorStore extends EventEmitter {
  addChangeListener(callback) {
    this.on("change", callback); //EventEmitter method
  }

  removeChangeListener(callback) {
    this.removeListener("change", callback); //EventEmitter method
  }

  emitChange() {
    this.emit("change");
  }

  getAuthors() {
    return _authors;
  }

  getAuthorById(id) {
    return _authors.find((author) => author.id === id);
  }
}

const store = new AuthorStore();
dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_AUTHORS:
      _authors = action.authors;
      store.emitChange();
      break;
    default:
      break;
  }
});

export default store;
