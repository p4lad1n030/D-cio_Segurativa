// area variaveis globais
const numberAge = document.getElementById("numberAge");
const numberMoney = document.getElementById("numberMoney");
const coverage = document.getElementById("coverage");
const seriousCoverage = document.getElementById("seriousCoverage");
const moreIllness = document.getElementById("moreIllness");
const selected = document.getElementsByTagName("input");

const alertModal = document.getElementById("alertModal");
const moreSeriousCoverage = document.getElementById('moreSeriousCoverage')
const moreCoverage = document.getElementById('moreCoverage')
const labelDeath = document.getElementById('labelDeath')
const bdgeillnes = document.getElementById('bdgeillnes')
// fim
/*
array com os inputs
inputs do header
0:input#name  nome
1:input#email  email
2:input#phone  fone

3:input#ageRange    idade
4:input#masc          sexo
5:input#fem.ml-1      
6:input#smokno.ml-1   fuma
7:input#smoksim.ml-1     
8:input#job.age_range       trabalho
9:input.age_range            salario
10:input.age_range
11:input#deathNatural.ml-1     morte natural
12:input#deathAccidental.ml-1   cober double
13:input#invalid.ml-1      invalidez
14:input#noAntecipation.ml-1    antdoen
15:input#yesAntecipation.ml-1
16:input#spending.ml-1        despesmedi
17:input#coverage.ml-1     cobert doen grav
18:input.age_range        +7doen grav
19:input#illnessMore.ml-1
20:input.age_range */



// função para trataro formulario do header

function rangeAge(value) {
  numberAge.innerHTML = value;
}
function rangemoney(value) {
  numberMoney.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
function rangeMoreIllness(value) {
  if (illnessMore.checked) {
    moreIllness.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }
}
// função para exibir a cobertura ipa
function doubleCover() {
  if (selected[12].checked) {
    labelDeath.style.color = "#4F3776"
    selected[13].setAttribute("checked", "checked");
    alert(
      "Foi adicionado a cobertura de IPA porque é pré-requisito para contratar a cobertura Capital em Dobro para Morte Acidental ou Antecipação por Doença."
    );
  } else {
    return;
  }
}
function antecipationIllnes() {
  if (selected[15].checked) {
      if(selected[13].checked){
        return;
      }else{
      selected[13].setAttribute("checked", "checked");
      alert(
        "Foi adicionado a cobertura de IPA porque é pré-requisito para contratar a cobertura Capital em Dobro para Morte Acidental ou Antecipação por Doença."
      );
      }
  } else {
    return;
  }
}  
// função para doença
function illnes(){
  if (selected[17].checked) {
    moreSeriousCoverage.style.display = 'block'
}else{
  return;
}
}
// 
// função para mais doenças
function rangeMoreIllness(value) {
  if (selected[18].checked) {
    // seriousCoverage.innerHTML = value;
    bdgeillnes.innerHTML = value;
}else{
  return;
}
}



// como capturar o valor dos selects
/*
function qulquerNome() {
  let select = document.querySelector('#idDoElemento')
  let optionValue = select.options[select.selectedIndex];
  let value = optionValue.value
}
*/