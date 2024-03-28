export default async (req, context) => {
    const countries = require("../../countries.json");
    return new Response("Liste aller länder: ;) ");
};

export const config = {
    path: "/all"
};
