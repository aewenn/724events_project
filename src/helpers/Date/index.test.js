import { getMonth } from "./index";

describe("Date helper", () => {
    describe("When getMonth is called", () => { // Tests pour la fonction getMonth
        it("the function return janvier for 2022-01-01 as date", () => { // Vérifie que la fonction retourne 'janvier' pour la date 2022-01-01
            const date = new Date("2022-01-01"); // Initialise une nouvelle date pour représenter le 1er janvier 2022
            expect(getMonth(date)).toBe("janvier"); // Vérifie si la fonction getMonth retourne 'janvier' pour cette date
        });
        it("the function return juillet for 2022-07-08 as date", () => { // Vérifie que la fonction retourne 'juillet' pour la date 2022-07-0
            const date = new Date("2022-07-08"); // Initialise une nouvelle date pour représenter le 8 juillet 2022
            expect(getMonth(date)).toBe("juillet"); // Vérifie si la fonction getMonth retourne 'juillet' pour cette date
        });
    });
}) // Les tests réussissent si la fonction retourne bien 'janvier' et 'juillet'

