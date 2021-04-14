import fs from "fs";
import path from "path";
import { connectDB } from "../../../helper/db";
import Comment from '../../../model/comment'

const handler = async (req, res) => {
  const { id, email, comment } = req.body;
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
  } 

  if (req.method == "POST") {

    try {
        const commentData = new Comment({email, comment})
        const data = await commentData.save()
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }

    const filePath = path.join(process.cwd(), "data", "comments.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    data.push({ id, email, comment });
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).send({ msg: "success" });

  } else {
    const filePath = path.join(process.cwd(), "data", "comments.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);

    const filteredComments = data.filter(
      (comment) => comment.id == req.query.eventId
    );
    return res.status(200).send({ comments: filteredComments });
  }
};

export default handler;
