import createHttp from "./BaseService";

const http = createHttp(true);

export const register = (data) => http.post("/users", data);
