const nome = "Miguel Ferreira"

const idade = 16;

const cidade = "cambé"

const friend = "felipe"

const frase = `Meu nome é ${nome}, tenho ${idade}, anos e moro e ${cidade}`

const frase2 = "estou cursando a unifil e irei pegar meu diploma dia 10 de novembto "




const idadeEmMeses = 16 * 12;
const idadeEmDias = idade * 365;

console.log("Opa meu 10, bem vindo meu nome é " + nome, " e tenho " + idade, " anos, moro na cidade de " + cidade, " e tenho um parceiro chamado " + friend, " atualmente " + frase2);

console.log("Minha idade em dias é:" + idadeEmDias)
console.log("Minha idade em meses é " + idadeEmMeses);



    // assunto de contas


const precoUnit = 20 
const qntd = 20 
const subToTal = precoUnit * qntd;
const valorMinimoPraTerDesconto = 100;
const temDesconto = subToTal > valorMinimoPraTerDesconto;

const cidadeCliente = "londrina";
const cidadeloja = "Londrina";

const freteGratis = temDesconto && (cidadeCliente == cidadeloja)

const resultado = `subTotal : R${subToTal}\n Tem desconto: ${temDesconto}\n
Frete Gratis: ${freteGratis} `

console.log(temDesconto)









