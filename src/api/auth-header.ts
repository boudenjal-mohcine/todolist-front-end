/*
We also have methods for retrieving data from server. 
In the case we access protected resources, the HTTP request needs Authorization header.
*/

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user") ?? "none");

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}
