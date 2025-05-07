import { describe, expect, test} from "vitest"
import { findSpell } from "../../src/entregable/findSpell.js"

describe("pruebas de la función findSpell buscando por nombre", () => {
  test("findSpell('Levitation Charm') deberia devolver el hechizo Wingardium Leviosa", () => {
    return findSpell("Levitation Charm").then((datos) => {
      expect(datos.body[0].incantation).to.be.eql("Wingardium Leviosa");
    })
  });
  test("findSpell('Unlocking Charm') deberia devolver el hechizo Wingardium Leviosa", () => {
    return findSpell("Unlocking Charm").then((datos) => {
      expect(datos.body[0].incantation).to.be.eql("Alohomora");
    })
  });
});

describe("pruebas de la función findSpell buscando por tipo", () => {
  test("findSpell('', 'Charm') deberia devolver como primer hechizo el hechizo Aberto", () => {
    return findSpell("", "Charm").then((datos) => {
      expect(datos.body[0].incantation).to.be.eql("Aberto");
    })
  });
  test("findSpell('', 'Charm') deberia devolver como segundo hechizo el hechizo Alarte Ascendare", () => {
    return findSpell("", "Charm").then((datos) => {
      expect(datos.body[1].incantation).to.be.eql("Alarte Ascendare");
    })
  });
});

describe("pruebas de la función findSpell buscando por incantation", () => {
  test("findSpell('', '', 'Alohomora') deberia devolver el hechico Unlocking Charm", () => {
    return findSpell("", "", "Alohomora").then((datos) => {
      expect(datos.body[0].name).to.be.eql("Unlocking Charm");
    })
  });
  test("findSpell('', '', 'Aparecium') deberia devolver el hechico Revealing Charm", () => {
    return findSpell("", "", "Aparecium").then((datos) => {
      expect(datos.body[0].name).to.be.eql("Revealing Charm");
    })
  });
});

describe("pruebas de la función findSpell buscando por nombre y tipo", () => {
  test("findSpell('Levitation Charm', 'Charm') deberia devolver el hechizo Wingardium Leviosa", () => {
    return findSpell("Levitation Charm", "Charm").then((datos) => {
      expect(datos.body[0].incantation).to.be.eql("Wingardium Leviosa");
    })
  });
  test("findSpell('Unlocking Charm', 'Charm') deberia devolver el hechizo Wingardium Leviosa", () => {
    return findSpell("Unlocking Charm", "Charm").then((datos) => {
      expect(datos.body[0].incantation).to.be.eql("Alohomora");
    })
  });
});

describe("pruebas de la función findSpell buscando por nombre y incantation", () => {
  test("findSpell('Levitation Charm', '', 'Wingardium Leviosa') deberia devolver luz transparente", () => {
    return findSpell("Levitation Charm", "", "Wingardium Leviosa").then((datos) => {
      expect(datos.body[0].light).to.be.eql("Transparent");
    })
  });
  test("findSpell('Revealing Charm', '', 'Aparecium') deberia devolver luz blanca", () => {
    return findSpell("Revealing Charm", "", "Aparecium").then((datos) => {
      expect(datos.body[0].light).to.be.eql("White");
    })
  });
});


describe("pruebas de la busqueda de hechizos que no existen", () => {
  test("findSpell('Suspenso', '', '') deberia devolver un error", () => {
    return findSpell("Suspenso", "", "").catch((datos) => {
      expect(datos).to.be.eql("No existe el hechizo");
    })
  });
  test("findSpell('Apertura', '', '') deberia devolver un error", () => {
    return findSpell("Apertura", "", "").catch((datos) => {
      expect(datos).to.be.eql("No existe el hechizo");
    })
  });

});

const leviosaa = {
  id: 'b907b56f-d643-4e9a-a37f-caa18b61ab97',
  name: 'Levitation Charm',
  incantation: 'Wingardium Leviosa',
  effect: 'Makes objects levitate',
  canBeVerbal: true,
  type: 'Charm',
  light: 'Transparent',
  creator: 'Jarleth Hobart (1544)'
}

const cheering = { 
  id:	"1fb0e795-6805-42bd-8b86-9d7ff52a6453",
  name:	"Cheering Charm",
  incantation:	null,
  effect:	"Creates joy",
  canBeVerbal:	true,
  type:	"Charm",
  light:	"None",
  creator:	"Felix Summerbee (1447-1508)",
}

describe("pruebas de la función findSpell comprobando el hechizo al completo", () => {
  test("findSpell('Levitation Charm') deberia devolver el hechizo Wingardium Leviosa al completo", () => {
    return findSpell("Levitation Charm").then((datos) => {
      expect(datos.body[0]).to.be.eql(leviosaa);
    })
  });
  test("findSpell('Cheering Charm') deberia devolver el hechizo Cheering Charm al completo", () => {
    return findSpell("Cheering Charm").then((datos) => {
      expect(datos.body[0]).to.be.eql(cheering);
    })
  });
});


