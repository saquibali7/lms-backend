const client = require("../config/DB");
const { v4: uuidv4 } = require("uuid");

const createClassroom = async (req, res, next) => {
  const { name, description, teacher_id } = req.body;
  const query = `insert into classrooms(classroom_id, name, teacher_id) values('${uuidv4()}', '${name}', '${req.user.userId}')`;
  try {
    const result = await client.query(query);
    res.json(result);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error" });
  }
};

const getClassrooms = async (req, res, next) => {
  const query = `select * from classrooms where teacher_id = '${req.user.userId}'`;
  try {
    const result = await client.query(query);
    res.json(result.rows);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error" });
  }
};
module.exports = { createClassroom, getClassrooms };
