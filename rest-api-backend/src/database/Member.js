const DB = require("./db.json");

/**
 * @openapi
 * components:
 *   schemas:
 *     Gender:
 *       type: string
 *       enum: [male, female]

 *     Member:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 12a410bc-849f-4e7e-bfc8-4ef283ee4b19
 *         name:
 *           type: string
 *           example: Jason Miller
 *         gender:
 *           $ref: "#/components/schemas/Gender"
 *         dateOfBirth:
 *           type: string
 *           example: 7/22/1079
 *         email:
 *           type: string
 *           example: email@domain.com
 *         password:
 *           type: string
 *           example: 666349420ec497c1dc890c45179d44fb13220239325172af02d1fb6635922956
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const getAllMembers = () => {
  try {
    return DB.members;
  } catch (error) {
    throw { status: 500, message: error };
  }
};
const getOneMember = (memberId) => {
  try {
    const member = DB.members.find((member) => member.id === memberId);
    if (!member) {
      throw {
        status: 400,
        message: `Can not find member with the if ${memberId}`,
      };
    }
    return member;
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};

module.exports = { getAllMembers, getOneMember };
