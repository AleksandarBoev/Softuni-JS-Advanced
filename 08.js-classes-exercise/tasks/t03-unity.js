class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    /**
     * @param otherRat {Rat}
     */
    unite(otherRat) {
        if (!(otherRat instanceof Rat)) {
            return;
        }

        this.unitedRats.push(otherRat);
    }

    //there's probably a better way of making a deep copy
    getRats() {
        return JSON.parse(JSON.stringify(this.unitedRats));
    }

    toString() {
        let result = this.name + '\n';
        this.unitedRats.forEach(r => result += `##${r.name}\n`);
        return result.trim();
    }
}

// let firstRat = new Rat("Peter");
// console.log(firstRat.toString()); // Peter
//
// console.log(firstRat.getRats()); // []
//
// firstRat.unite(new Rat("George"));
// firstRat.unite(new Rat("Alex"));
// console.log(firstRat.getRats());
// // [ Rat { name: 'George', unitedRats: [] },
// //  Rat { name: 'Alex', unitedRats: [] } ]
//
// console.log(firstRat.toString());
// // Peter
// // ##George
// // ##Alex
