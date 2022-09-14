import express from "express";
const app = express();
const port = 3333;
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: "Anúncio 1" },
        { id: 2, name: "Anúncio 2" },
        { id: 3, name: "Anúncio 3" }
    ]);
});
app.listen(port);
