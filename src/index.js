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
const cents = document.getElementById('cents')
const principalValue = document.getElementById('principalValue')
const ageRange = document.getElementById
('ageRange')
const cover = document.getElementById('cover')
const ipaValue = document.getElementById('ipaValue')

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

// ==


function rangeAge(value) {
  numberAge.innerHTML = value;
  console.log(value)
  // return  age = value
}
function rangemoney(value) {
  numberMoney.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  console.log(value)

  labelDeath.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value * 2) ;
  
  ipaValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value) ;

  

  // return money = value
}

// função para exibir o valor no quadro de orçamento
function budget() {
 
  var promise = new Promise(function(resolve, reject){
    // if(){ 

    // }else if(){

    // }else if(){
      
    // }else if(){
      
    // }else if(){
      
    // }

resolve()
reject()

})
return promise
}
budget().then(()=> {
  // let age = rangeAge()
  // let money = rangemoney()
  // console.log(age);
  // console.log(money);
  

//     if (age <= 35 && money <= 41000) { 

//     }else if (age ) {

//     }
//   })

// document.onload = function(){
//   let age = rangeAge()
//   let money = rangemoney()
  })

// =====
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
  if (selected[11].checked) {
    labelDeath.style.color = "#4F3776"
    selected[12].setAttribute("checked", "checked");
    alert(
      "Foi adicionado a cobertura de IPA porque é pré-requisito para contratar a cobertura Capital em Dobro para Morte Acidental ou Antecipação por Doença."
    );
  } else {
    return;
  }
}
function antecipationIllnes() {
  if (selected[14].checked) {
      if(selected[12].checked){
        return;
      }else{
      selected[12].setAttribute("checked", "checked");
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