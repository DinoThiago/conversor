//armazenar distancia
let distancia= prompt('Qual eh a distancia em ano luz')

//escolha do usuario
let opEscolha= prompt('Escolha a unidade de conversão...\n1.Parsec(pc) \n2.Unidade astronômica(au) \n3. Quilômetros(km)\n\n Digite o numero da opção desejada')

//nome da unidade
let escolhaUn
//distancia convertida
let distanciaConv

//verificando opção escolhida
switch(opEscolha){
    case '1':
        escolhaUn= 'Parsec'
        distanciaConv= distancia * .300601
        break
    case '2':
        escolhaUn= 'Unidade astronômica'
        distanciaConv= distancia *63241.1
        break
    case '3':
        escolhaUn= 'Quilômetros'
        distanciaConv= distancia * 9.5 * Math.pow(10,12)
        break
    default:
        escolhaUn= 'Unidade nao identificada'
        distanciaConv= 'Conversão fora do escopo'    
}
alert('Distancia em ano-luz: ' + distancia + ' \n ' + escolhaUn + ':' + distanciaConv)