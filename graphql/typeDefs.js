const typeDefs = `
    scalar DateTime

    type User {
        id: ID
        name: String
        email: String
        mobile: String
    }

    type Orders {
        id: ID
        createdAt: DateTime
        user: User
        userId: Int
    }

    type Query {
        getAllUsers: [User]
        getUserOrders(userId: Int!): [Orders]
    }

    type Mutation {
        createUser(name: String!, email: String!, mobile: String!): User
        createNewOrder(userId:Int!): Orders
    }
`;

module.exports = typeDefs;
