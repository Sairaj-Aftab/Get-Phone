import bcrypt from "bcryptjs";

export const saltAndHashPassword = (password) => {
  const salt = bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = (inputPassword, storedHash) => {
  return bcrypt.compare(inputPassword, storedHash);
};
