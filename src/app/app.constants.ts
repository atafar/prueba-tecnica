import { Hero } from "src/interfaces/hero.interface";

export abstract class AppConstants {
    static heroes: Hero[] =
        [
            {
                id: 1,
                name: "AQUAMAN",
                bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina."
            },
            {
                id: 2,
                name: "BATMAN",
                bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión»."
            },
            {
                id: 3,
                name: "DAREDEVIL",
                bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos.",
            },
            {
                id: 4,
                name: "HULK",
                bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia.",
            },
            {
                id: 5,
                name: "LINTERNA VERDE",
                bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento.",
            },
            {
                id: 6,
                name: "SPIDER-MAN",
                bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes.",
            },
            {
                id: 7,
                name: "WOLVERINE",
                bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea.",
            }
        ];
}