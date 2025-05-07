import request from "request";
export function findSpell(name = "", type = "", incantation = "") {
    const url = `https://wizard-world-api.herokuapp.com/Spells?Name=${name}&type=${type}&Incantation=${incantation}`;
    console.log(url);
    return new Promise((resolve, reject) => {
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                reject("No se ha podido contactar con el servidor");
            }
            else if (response.body.length === 0) {
                reject("No existe el hechizo");
            }
            else {
                resolve(response);
            }
        });
    });
}
findSpell("Levitation Charm")
    .then((result) => {
    console.log("Success:", result.body[0]);
})
    .catch((error) => {
    console.log("Error:", error);
});
findSpell("Suspenso")
    .then((result) => {
    console.log("Success:", result.body[0].incantation);
})
    .catch((error) => {
    console.log("Error:", error);
});
