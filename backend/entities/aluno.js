class Aluno {
    constructor(id,nome, data, ausencia, presenca, modulo, aulas){
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.ausencia = ausencia;
        this.presenca = presenca;
        this.modulo = modulo;
        this.aulas = aulas[Aula];
    }
}