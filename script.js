function calc(){
    var weight, height, result
    weight = Number(document.formBmi.n1.value)
    height = Number(document.formBmi.n2.value)
    result = Number(document.formBmi.chRe.value)
    result = weight / (height * height)
    document.formBmi.chRe.value = result.toFixed(2);

    if (result < 18.5) {
        document.getElementById('descricao').innerText = 'Você está abaixo do peso!'
        document.getElementById('abaixo1').style.backgroundColor = 'rgb(38, 233, 54)'
        document.getElementById('abaixo2').style.backgroundColor = 'rgb(38, 233, 54)'

        document.getElementById('ideal1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('ideal2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('sobrepeso1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('sobrepeso2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauI1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauI2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauII1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauII2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('morbida1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('morbida2').style.backgroundColor = 'rgb(200, 243, 229)'
    }

    else if (result >= 18.5 && result <= 24.9) {
        document.getElementById('descricao').innerText = 'Você possui o peso ideal!'

        document.getElementById('abaixo1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('abaixo2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('ideal1').style.backgroundColor = 'rgb(38, 233, 54)'
        document.getElementById('ideal2').style.backgroundColor = 'rgb(38, 233, 54)'

        document.getElementById('sobrepeso1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('sobrepeso2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauI1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauI2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauII1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauII2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('morbida1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('morbida2').style.backgroundColor = 'rgb(200, 243, 229)'
    }

    else if (result >= 25 && result <= 29.9) {
        document.getElementById('descricao').innerText = 'Sua classificação é de sobrepeso.'

        document.getElementById('abaixo1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('abaixo2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('ideal1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('ideal2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('sobrepeso1').style.backgroundColor = 'rgb(38, 233, 54)'
        document.getElementById('sobrepeso2').style.backgroundColor = 'rgb(38, 233, 54)'

        document.getElementById('grauI1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauI2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauII1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauII2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('morbida1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('morbida2').style.backgroundColor = 'rgb(200, 243, 229)'
    }

    else if (result >= 30 && result <= 34.9) {
        document.getElementById('descricao').innerText = 'Sua classificação é de Obesidade Grau I'

        document.getElementById('abaixo1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('abaixo2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('ideal1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('ideal2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('sobrepeso1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('sobrepeso2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauI1').style.backgroundColor = 'rgb(38, 233, 54)'
        document.getElementById('grauI2').style.backgroundColor = 'rgb(38, 233, 54)'

        document.getElementById('grauII1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauII2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('morbida1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('morbida2').style.backgroundColor = 'rgb(200, 243, 229)'
    }

    else if (result >= 35 && result <= 39.9) {
        document.getElementById('descricao').innerText = 'Sua classificação é de Obesidade Grau II'

        document.getElementById('abaixo1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('abaixo2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('ideal1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('ideal2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('sobrepeso1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('sobrepeso2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauI1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauI2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauII1').style.backgroundColor = 'rgb(38, 233, 54)'
        document.getElementById('grauII2').style.backgroundColor = 'rgb(38, 233, 54)'

        document.getElementById('morbida1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('morbida2').style.backgroundColor = 'rgb(200, 243, 229)'
    }

    else {
        document.getElementById('descricao').innerText = 'Sua classificação é de Obesidade Grau III ou Mórbida'

        document.getElementById('abaixo1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('abaixo2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('ideal1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('ideal2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('sobrepeso1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('sobrepeso2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauI1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauI2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('grauII1').style.backgroundColor = 'rgb(200, 243, 229)'
        document.getElementById('grauII2').style.backgroundColor = 'rgb(200, 243, 229)'

        document.getElementById('morbida1').style.backgroundColor = 'rgb(38, 233, 54)'
        document.getElementById('morbida2').style.backgroundColor = 'rgb(38, 233, 54)'
    }
}