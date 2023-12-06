const typesColors = {
    "normal":"rgb(168, 168, 120)",
    "fire":"rgb(240, 128, 48)",
    "water":"rgb(104, 144, 240)",
    "grass":"rgb(120, 200, 80)",
    "electric":"rgb(248, 208, 48)",
    "ice":"rgb(152, 216, 216)",
    "fighting":"rgb(192, 48, 40)",
    "poison":"rgb(160, 64, 160)",
    "ground":"rgb(224, 192, 104)",
    "flying":"rgb(168, 144, 240)",
    "psychic":"rgb(248, 88, 136)",
    "bug":"rgb(168, 184, 32)",
    "rock":"rgb(184, 160, 56)",
    "ghost":"rgb(112, 88, 152)",
    "dragon":"rgb(112, 56, 248)",
    "dark":"rgb(112, 88, 72)",
    "steel":"rgb(184, 184, 208)",
    "fairy":"rgb(240, 182, 188)"
}

export function getColorByType(type){
    return typesColors[type]
}