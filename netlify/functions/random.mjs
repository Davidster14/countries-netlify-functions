export default async (req, context) => {
    const countries = require("../../countries.json");
    const body = JSON.stringify(countries);

    return new Response(body, {
        headers: {
            status: 200,
            statusText: "OK",
            "Content-Type": "application/json"
        }
    });
};

export const config = {
    path: "/random"
};
