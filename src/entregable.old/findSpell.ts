import request from "request";

type tipo = "Charm" | "Conjuration" | "Spell" | "Transfiguration" | "HealingSpell" | "DarkCharm" | "Jinx" | "Curse" | "MagicalTransportation" | "Hex" | "CounterSpell" | "DarkArts" | "CounterJinx" | "CounterCharm" | "Untransfiguration" | "Vanishment" | "BindingMagicalContract" | "";

export function findSpell(name : string = "", type : tipo = "", incantation : string = "") {
    const url = `https://wizard-world-api.herokuapp.com/Spells?Name=${name}&type=${type}&Incantation=${incantation}`;
    console.log(url);

    return new Promise<request.Response>((resolve, reject) => {
        request({ url: url, json: true }, (error: Error, response) => {
            if (error) {
              reject("No se ha podido contactar con el servidor");
            } else if (response.body.length === 0) {
                reject("No existe el hechizo");
            } else {
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