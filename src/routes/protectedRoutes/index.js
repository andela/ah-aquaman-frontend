import decode from "jwt-decode";

const Authenticate = (token) => {
  try {
    const res = decode(token);
    if (res.exp > Date.now() / 1000) {
      return { res };
    } 
    return false;
  } catch (error) {
    return false;
  }
};
export default Authenticate;
