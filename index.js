class HeroAttack {
    constructor(nameHero, ageHero, tipeHero) {
    this.nameHero = nameHero;
    this.ageHero = ageHero;
    this.tipeHero = tipeHero;
    }

attack() {
    if (this.tipeHero === `mago`)
        console.log(`O ${this.tipeHero} atacou usando magia`)
    else if (this.tipeHero === `guerreiro`)
        console.log(`O ${this.tipeHero} atacou usando espada`)
    else if (this.tipeHero === `monge`)
        console.log(`O ${this.tipeHero} atacou usando artes marciais`)
    else
        console.log(`O ${this.tipeHero} atacou usando shuriken`)
 }

}


let heroAttack = new HeroAttack (`Julieta`, 2,`mago`)

heroAttack.attack();

