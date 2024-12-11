const prisma = require("../../prisma/prismaClient");
const createNewUser = async ({ name, email, mobile }) => {
  try {
    return await prisma.user.create({
      data: {
        name,
        email,
        mobile,
      },
    });
  } catch (error) {
    throw error;
  }
};

const getAllUsersList = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createNewUser,
  getAllUsersList,
};
