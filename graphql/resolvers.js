const { createNewUser, getAllUsersList } = require("../functions/user/user");
const {
  createUserOrder,
  getUserOrdersList,
} = require("../functions/orders/orders");

const resolvers = {
  Query: {
    getAllUsers: async () => getAllUsersList(),
    getUserOrders: async (_, params) => getUserOrdersList(params),
  },
  Mutation: {
    createUser: (_, data) => createNewUser(data),
    createNewOrder: (_, data) => createUserOrder(data),
  },
};

module.exports = resolvers;
