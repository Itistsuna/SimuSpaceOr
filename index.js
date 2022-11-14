const flotteJoueur1 = [
    {
        name: "",
        pdf: 10,
        bouclier: 1,
        coque: 15,
        quantity : 1
    },
    {
        name: "",
        pdf: 1,
        bouclier: 10,
        coque: 15,
        quantity : 1
    }
]

const flotteJoueur2 = [
    {
        name: "",
        pdf: 11,
        bouclier: 15,
        coque: 1,
        quantity : 2
    }
]
// Les degats infligés par unité est ( le pdf total / le nombre d'unité a viser )
// ---- Regle de combat ----
// Bouclier au dessus de 50 % aka diminution = bouclier - pdf
// Bouclier en dessous de 50%  aka optimun = entre 10 et 20% de diminution , et 0% à 25% sur la coque
// Bouclier ne regen pas sur space
// Saturation = ppu supérieuur à boubou ducoup prend entre 25% et 50% (diminue d'autant le bouclier d'autant) et le reste va sur la coque
// Coque pas de regle special
// Aussi Pdf / nbr de passe

const calculStatsTotal = (flotte) => {

    let joueur = {pdf:0,bouclier:0,coque:0, quantity:0}
    
    flotte.map((vaisseau) => {
        joueur.pdf += ( vaisseau.pdf * vaisseau.quantity)
        joueur.bouclier += ( vaisseau.bouclier * vaisseau.quantity )
        joueur.coque += ( vaisseau.coque * vaisseau.quantity )
        joueur.quantity += vaisseau.quantity
    })

    return joueur

}


const  main =  async() =>  {

    // boucle sur le nombre de passe soit 10
    for (let passe = 1; passe < 11; passe++) {
        let joueur1 = calculStatsTotal(flotteJoueur1)
        let joueur2 = calculStatsTotal(flotteJoueur2)

        console.log(joueur1);
        console.log(joueur2);
        console.log('-------------------');

    }


    // return result
}
main()