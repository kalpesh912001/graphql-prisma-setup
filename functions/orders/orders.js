const prisma = require("../../prisma/prismaClient");

const getUserOrdersList = async ({ userId }) => {
  try {
    const orders = await prisma.orders.findMany({
      where: { userId },
      include: { user: true },
    });
    return orders;
  } catch (error) {
    throw error;
  }
};

const createUserOrder = async ({ userId }) => {
  try {
    return await prisma.orders.create({
      data: { userId },
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { createUserOrder, getUserOrdersList };
