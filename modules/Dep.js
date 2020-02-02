class Dep{
    constructor(){
        this.dep = []
    }

    addDep(dep){
        this.dep.push(dep)
    }

    removeDep(i){
        this.dep.splice(i,1)
    }
}

module.exports = Dep