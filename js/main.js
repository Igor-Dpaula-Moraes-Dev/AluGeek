async function buscaImagem (){
    const imagem = await fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=8db8899381b41b2050a45ff25eb91ff5")
    var imagemConvertida =await imagem.json();
}
buscaImagem()
console.log(buscaImagem());