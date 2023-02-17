const comparePassword = ({ bcrypt }) => {
  async function compare(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }
  return compare;
};

const encryptPassword = ({ bcrypt }) => {
  async function encrypt(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }
  return encrypt;
};

module.exports = { encryptPassword, comparePassword };
