// 1. Função que calcula o saldo e determina o nível
function calcularNivelRankeado(vitorias, derrotas) {

    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível
    let nivel = "";

    // 2. Estrutura de decisão para determinar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // Se vitórias for maior ou igual a 101
        nivel = "Imortal";
    }

    // Retorna os dois valores para serem usados fora da função
    return { saldo: saldoVitorias, nivel: nivel };
}

// --- Área de Execução do Código ---

// 3. Definindo a quantidade de vitórias e derrotas de um jogador
const vitoriasDoHeroi = 75;
const derrotasDoHeroi = 27;

// 4. Chamando a função e armazenando o resultado (saldo e nível)
const resultado = calcularNivelRankeado(vitoriasDoHeroi, derrotasDoHeroi);

// 5. Exibindo a mensagem de saída final
console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.nivel}`);