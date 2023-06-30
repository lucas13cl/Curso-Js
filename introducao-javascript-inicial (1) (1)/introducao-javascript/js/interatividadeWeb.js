

        var botao = document.querySelector("#adicionar-paciente")
        botao.addEventListener("click", interatividadeDoBotao)

        function interatividadeDoBotao(event){
            event.preventDefault(); //evitar que a função aconteça sem perceber
            var form = document.querySelector('#form-cadastrar');

            //1 - Extrair informação do input
            var paciente = obterPacienteDoFormulario(form)

            //2 - criar linha da tabela (tr)
            var pacienteTr = montaTr(paciente)

            
            // 3 - Trazer a tabela existente HTML para o JS
            var tabela = document.querySelector("#tabela-pacientes")

             // 4 - Anexar a linha pronta na tabela(anexar a tr na)
            tabela.appendChild(pacienteTr)

        }

        function obterPacienteDoFormulario(formulario){
            var paciente = {
                nome: formulario.nome.value,
                peso: formulario.peso.value,
                altura: formulario.altura.value,
                gordura: formulario.gordura.value,
                imc: calcularIMC(formulario.peso.value, formulario.altura.value)
            }
            console.log(typeof formulario.altura.value)
            return paciente;
            
        }

        function montaTr(paciente){
            var pacienteTr = document.createElement("tr")
        
            var nomeTd = document.createElement("td")
            var pesoTd = document.createElement("td")
            var alturaTd = document.createElement("td")
            var gorduraTd = document.createElement("td")
            var imcTd = document.createElement("td")

            nomeTd.textContent = paciente.nome
            pesoTd.textContent = paciente.peso
            alturaTd.textContent = paciente.altura
            gorduraTd.textContent = paciente.gordura
            imcTd.textContent = paciente.imc
            console.log(paciente.imc)

            pacienteTr.appendChild(nomeTd)
            pacienteTr.appendChild(pesoTd)
            pacienteTr.appendChild(alturaTd)
            pacienteTr.appendChild(gorduraTd)
            pacienteTr.appendChild(imcTd)

            return pacienteTr;
    

        }
        