const memberService = require("../services/memberService");

const getAllMembers = (req, res) => {
  try {
    const allMembers = memberService.getAllMembers();
    res.status(200).send({
      status: "OK",
      data: allMembers,
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "OK",
      data: { error: error?.message || error },
    });
  }
};

const getOneMember = (req, res) => {
  const {
    params: { memberId },
  } = req;

  if (!memberId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: 'Parameter ":memberId" can not be empty' },
    });
  }
  try {
    const member = memberService.getOneMember(memberId);
    res.status(200).send({
      status: "OK",
      data: member,
    });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
};

module.exports = { getAllMembers, getOneMember };
