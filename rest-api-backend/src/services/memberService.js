const Member = require("../database/Member");

const getAllMembers = () => {
  try {
    const allMembers = Member.getAllMembers();
    return allMembers;
  } catch (error) {
    throw error;
  }
};

const getOneMember = (memberId) => {
  try {
    const member = Member.getOneMember(memberId);
    return member;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllMembers, getOneMember };
