  //var arrayDePacientes= document.querySelector(".titulo");
  //titulo.textContent = "Projeto SENAC 2023";
  
  //array de todos pacientes
  var arrayDePacientes = document.querySelectorAll(".paciente");
  console.log(arrayDePacientes);


    //     posição 0     1     2      3      4
 //arrayDePacientes=["João   Lucas  Maria   Luiz"]

    for(var i = 0; i<arrayDePacientes.length; i++){

        var tdPeso = arrayDePacientes[i].querySelector(".info-peso") //peso com tag
        var tdAltura = arrayDePacientes[i].querySelector(".info-altura")//altura com tag
        var tdIMC = arrayDePacientes[i].querySelector(".info-imc") //imc com tag
        var peso = tdPeso.textContent //retirada de tag
        var altura = tdAltura.textContent //retirada de tag
        if(peso<0||peso>1000){
            if(altura<0||altura>3){
                tdIMC.textContent = "Peso e Altura Inválidos"
                arrayDePacientes[i].classList.add('paciente-invalido')

            }else{
                tdIMC.textContent = "Peso Inválido"
                arrayDePacientes[i].classList.add('paciente-invalido')
            }
            }else if(altura<0||altura>3){
              tdIMC.textContent = "Altura Inválida"
              arrayDePacientes[i].classList.add('paciente-invalido')
                  
            }else{
                tdIMC.textContent = calcularIMC(peso, altura); //retirada de tag e atribuição de calculo IMC
            }


    }
    
    function calcularIMC(peso, altura){
        var imc = (peso / altura**2)
        return imc.toFixed(2)
    }
