// Definindo a classe Heroi
class Hero {
    // Construtor da classe
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque indefinido';
      }
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias da classe Heroi
  const mago = new Hero('Mestre Yoda', 1200, 'mago');
  const guerreiro = new Hero('Aragorn', 30, 'guerreiro');
  const monge = new Hero('Aang', 17, 'monge');
  const ninja = new Hero('Naruto', 14, 'ninja');
  
  // Realizando os ataques
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  