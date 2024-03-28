export default async (req, context) => {
    const countries = require("../../countries.json");
    return new Response("Liste aller Länder  deren Name den angegebenen Namen enthält.");
    const url = new URL(request.url);
    const queryStringParams = url.searchParams;
    const fooParam = queryStringParams.get("foo");
};

export const config = {
    path: "/name"
};
