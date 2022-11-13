// TODO update this and define a Mongoose schema and model!

import { v4 as uuidv4 } from "uuid";

class Client {
  constructor(name, email) {
    this._id = uuidv4();
    this.name = name;
    this.email = email;
  }
}

export default Client;
