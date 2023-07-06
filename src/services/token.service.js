const generateJWT = ({ jwt }) => {
    function signToken(user_id) {
      const payload = {
        user: user_id
      };
      return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24hrs" });
    }
    return signToken;
  };

  
  
  module.exports = generateJWT;
  