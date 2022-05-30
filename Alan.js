const arguments = process.argv.slice(2)

function alan(yaricap){
   let DaireninAlani = (yaricap * yaricap * Math.PI)
   console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${DaireninAlani}`)
}

alan(arguments[0])