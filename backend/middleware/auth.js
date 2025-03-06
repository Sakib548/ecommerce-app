import jwt from "jsonwebtoken";
const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const token_decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decoded.id;
    console.log("User", req.body.userId);

    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
