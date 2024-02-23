import createHttp from "./BaseService";

const http = createHttp(true);

export const createClient = (data) => http.post("/client/client", data);