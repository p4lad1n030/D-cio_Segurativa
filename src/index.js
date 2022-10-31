// area variaveis globais
const numberAge = document.getElementById("numberAge");
const numberMoney = document.getElementById("numberMoney");
const coverage = document.getElementById("coverage");
const seriousCoverage = document.getElementById("seriousCoverage");
const moreIllness = document.getElementById("moreIllness");
const selected = document.getElementsByTagName("input");

const alertModal = document.getElementById("alertModal");
const moreSeriousCoverage = document.getElementById("moreSeriousCoverage");
const moreCoverage = document.getElementById("moreCoverage");
const labelDeath = document.getElementById("labelDeath");
const bdgeillnes = document.getElementById("bdgeillnes");
const cents = document.getElementById("cents");
const principalValue = document.getElementById("principalValue");
const ageRange = document.getElementById("ageRange");
const coverRange = document.getElementById("coverRange");
const ipaValue = document.getElementById("ipaValue");

var age;
var cover;

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

// função para tratar o formulario do header

// ==
function rangeAge(value) {
  numberAge.innerHTML = value
}
function rangeMoney(value) {
  numberMoney.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  labelDeath.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value * 2);

  ipaValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
 };

// função para exibir o valor no quadro de orçamento

function showPrice() {
  ageRange.addEventListener("input", function (e) {
    age = e.target.value;
    return age;
  });
  coverRange.addEventListener("input", (e) => {
    cover = e.target.value;
    return cover;
  });
// principalValue, cents
  console.log(parseInt(age), parseInt(cover))
  setValue(parseInt(age), parseInt(cover))
}
function setValue(age, cover) {
  if(!age  || age  < 36){
    if(cover < 42000) {
      principalValue.innerText = '16'
      cents.innerText = '07'
    }else if (cover < 56000) {
      principalValue.innerText = '21'
      cents.innerText = '56'      
    }else if (cover < 71000){
      principalValue.innerText = '27'
      cents.innerText = '44'
    }else if (cover < 86000) {
      principalValue.innerText = '33'
      cents.innerText = '32'
    }else if (cover < 101000) {
      principalValue.innerText = '39'
      cents.innerText = '20'
    }else if (cover < 126000) {
      principalValue.innerText = '49'
      cents.innerText = '00'
    }else if (cover < 151000) {
      principalValue.innerText = '58'
      cents.innerText = '80'
    }else if (cover < 176000) {
      principalValue.innerText = '68'
      cents.innerText = '60'
    }else if (cover < 201000) {
      principalValue.innerText = '78'
      cents.innerText = '40'
    }else if (cover < 251000) {
      principalValue.innerText = '98'
      cents.innerText = '00'
    }else if (cover < 301000) {
      principalValue.innerText = '117'
      cents.innerText = '60'
    }
  }else if(age < 41){
    if(cover < 42000) {
      principalValue.innerText = '19'
      cents.innerText = '19'
    }else if (cover < 56000) {
      principalValue.innerText = '25'
      cents.innerText = '74'      
    }else if (cover < 71000){
      principalValue.innerText = '32'
      cents.innerText = '76'
    }else if (cover < 86000) {
      principalValue.innerText = '39'
      cents.innerText = '78'
    }else if (cover < 101000) {
      principalValue.innerText = '48'
      cents.innerText = '80'
    }else if (cover < 126000) {
      principalValue.innerText = '58'
      cents.innerText = '50'
    }else if (cover < 151000) {
      principalValue.innerText = '70'
      cents.innerText = '20'
    }else if (cover < 176000) {
      principalValue.innerText = '81'
      cents.innerText = '90'
    }else if (cover < 201000) {
      principalValue.innerText = '93'
      cents.innerText = '60'
    }else if (cover < 251000) {
      principalValue.innerText = '117'
      cents.innerText = '00'
    }else if (cover < 301000) {
      principalValue.innerText = '140'
      cents.innerText = '40'
    }
  }
}
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
    labelDeath.style.color = "#4F3776";
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
    if (selected[12].checked) {
      return;
    } else {
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
function illnes() {
  if (selected[17].checked) {
    moreSeriousCoverage.style.display = "block";
  } else {
    return;
  }
}
//
// função para mais doenças
function rangeMoreIllness(value) {
  if (selected[18].checked) {
    // seriousCoverage.innerHTML = value;
    bdgeillnes.innerHTML = value;
  } else {
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
