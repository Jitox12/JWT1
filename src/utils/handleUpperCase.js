function toUpperCaseFirstKey(key){
    words  = key.split(" ")

    UpperCase = words
                .filter((word) => word.trim().length > 0) //verifica que no esté vacio
                .map((word) =>word[0].charAt(0).toUpperCase() + word.substring(1)) //uppercase a la primera letra de cada palabra
                .join(" ") //unificar con un espacio
    
    return UpperCase
}

module.exports = toUpperCaseFirstKey