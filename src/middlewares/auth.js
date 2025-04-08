import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
  try {
    // header contains the token
    // format
    // Bearer Token
    // inside autherization header
    var authHeader = req.headers["authorization"];

    var token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      // Meaning the user has not send a token.
      return res.sendStatus(401);
      // res.redirect("/login/");
    }
    // req.token = token;
    // let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log("invalid token");
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } catch (error) {
    return res.send(error.message);
  }
}

export default authenticateToken;
