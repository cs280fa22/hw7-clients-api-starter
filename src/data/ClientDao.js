import Client from "../model/Client.js";
import ApiError from "../model/ApiError.js";

class ClientDao {
  constructor() {
    this.clients = [];
  }

  // returns the new client data
  // name and email should be defined and nonempty (otherwise, returns an error)
  async create({ name, email }) {
    if (name === undefined || name === "") {
      throw new ApiError(400, "Every client must have a none-empty name!");
    }

    if (email === undefined || email === "") {
      throw new ApiError(400, "Every client must have a valid email!");
    }

    const client = new Client(name, email);
    this.clients.push(client);
    return client;
  }

  // clients may not change their email!
  // returns the updated client data
  // returns an error if there is no client with the given ID
  async update(id, { name }) {
    const index = this.clients.findIndex((client) => client._id === id);

    if (index === -1) {
      throw new ApiError(404, "There is no client with the given ID!");
    }

    if (name !== undefined) {
      this.clients[index].name = name;
    }

    return this.clients[index];
  }

  // returns the deleted client data
  // returns an error if there is no client with the given ID
  async delete(id) {
    const index = this.clients.findIndex((client) => client._id === id);

    if (index === -1) {
      throw new ApiError(404, "There is no client with the given ID!");
    }

    const client = this.clients[index];
    this.clients.splice(index, 1);
    return client;
  }

  // returns an empty array if there is no client with the given ID
  async read(id) {
    return this.clients.find((client) => client._id === id);
  }

  // returns an empty array if there is no client in the database
  //  or no client matches the search queries
  async readAll(query = "") {
    if (query !== "") {
      return this.clients.filter(
        (client) => client.name === query || client.email === query
      );
    }
    return this.clients;
  }
}

export default ClientDao;
