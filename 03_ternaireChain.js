
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {

    return (a>b) ? ">": (a<b) ? "<" :  "=" ;
}

module.exports = ternaryChain;

console.log(ternaryChain(2, 3));
console.log(ternaryChain(3, 2));
console.log(ternaryChain(3, 3));
