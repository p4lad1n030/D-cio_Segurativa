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
const nameUser = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const send = document.getElementById("send");
const formHeader = document.getElementById("formHeader");
const sent = document.getElementById("sent");
const radSex = document.getElementsByName("radSex");
const radsmok = document.getElementsByName("radsmok");
const inJob = document.getElementsByName("inJob")[0];
const monthlyIncome = document.getElementsByName("monthlyIncome")[0];
const showProfession = document.getElementById("showProfession");
const showMoney = document.getElementById("showMoney");
const antecipationTogle = document.getElementById("antecipationTogle");
const deathAccidental = document.getElementById("deathAccidental");
const noAntecipation = document.getElementById("noAntecipation");
const spending = document.getElementById("spending");
const coverage1 = document.getElementById("coverage1");
var age;
var cover;
var userName;
// fim
{
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
  formHeader.onsubmit = (e) => {
    e.preventDefault();
    // console.log(nameUser.value)
    let nameInput = nameUser.value;
    let emailInput = email.value;
    let phoneInput = phone.value;
    window.location.href = `https://api.whatsapp.com/send?phone=5551985172153&text=Olá%20me%20chamo%20${nameInput},%20com%20email:%20${emailInput}%20e%20o%20telefone:%20${phoneInput}%20e%20gostaria%20de%20mais%20detalhes%20do%20seguro%20de%20vida.`;
  };
  // ==
  function rangeAge(value) {
    numberAge.innerHTML = value;
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
  }

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
    setValue(parseInt(age), parseInt(cover));
    console.log(principalValue.innerHTML, cents.innerHTML);
  }
  function setValue(age, cover) {
    if (!age || age < 36) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "16";
        cents.innerText = "07";
      } else if (cover < 56000) {
        principalValue.innerText = "21";
        cents.innerText = "56";
      } else if (cover < 71000) {
        principalValue.innerText = "27";
        cents.innerText = "44";
      } else if (cover < 86000) {
        principalValue.innerText = "33";
        cents.innerText = "32";
      } else if (cover < 101000) {
        principalValue.innerText = "39";
        cents.innerText = "20";
      } else if (cover < 126000) {
        principalValue.innerText = "49";
        cents.innerText = "00";
      } else if (cover < 151000) {
        principalValue.innerText = "58";
        cents.innerText = "80";
      } else if (cover < 176000) {
        principalValue.innerText = "68";
        cents.innerText = "60";
      } else if (cover < 201000) {
        principalValue.innerText = "78";
        cents.innerText = "40";
      } else if (cover < 251000) {
        principalValue.innerText = "98";
        cents.innerText = "00";
      } else if (cover < 301000) {
        principalValue.innerText = "117";
        cents.innerText = "60";
      }
    } else if (age < 41) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "19";
        cents.innerText = "19";
      } else if (cover < 56000) {
        principalValue.innerText = "25";
        cents.innerText = "74";
      } else if (cover < 71000) {
        principalValue.innerText = "32";
        cents.innerText = "76";
      } else if (cover < 86000) {
        principalValue.innerText = "39";
        cents.innerText = "78";
      } else if (cover < 101000) {
        principalValue.innerText = "48";
        cents.innerText = "80";
      } else if (cover < 126000) {
        principalValue.innerText = "58";
        cents.innerText = "50";
      } else if (cover < 151000) {
        principalValue.innerText = "70";
        cents.innerText = "20";
      } else if (cover < 176000) {
        principalValue.innerText = "81";
        cents.innerText = "90";
      } else if (cover < 201000) {
        principalValue.innerText = "93";
        cents.innerText = "60";
      } else if (cover < 251000) {
        principalValue.innerText = "117";
        cents.innerText = "00";
      } else if (cover < 301000) {
        principalValue.innerText = "140";
        cents.innerText = "40";
      }
    } else if (age < 46) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "22";
        cents.innerText = "22";
      } else if (cover < 56000) {
        principalValue.innerText = "29";
        cents.innerText = "81";
      } else if (cover < 71000) {
        principalValue.innerText = "37";
        cents.innerText = "94";
      } else if (cover < 86000) {
        principalValue.innerText = "46";
        cents.innerText = "07";
      } else if (cover < 101000) {
        principalValue.innerText = "54";
        cents.innerText = "20";
      } else if (cover < 126000) {
        principalValue.innerText = "67";
        cents.innerText = "75";
      } else if (cover < 151000) {
        principalValue.innerText = "81";
        cents.innerText = "30";
      } else if (cover < 176000) {
        principalValue.innerText = "94";
        cents.innerText = "85";
      } else if (cover < 201000) {
        principalValue.innerText = "108";
        cents.innerText = "40";
      } else if (cover < 251000) {
        principalValue.innerText = "135";
        cents.innerText = "50";
      } else if (cover < 301000) {
        principalValue.innerText = "162";
        cents.innerText = "60";
      }
    } else if (age < 51) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "26";
        cents.innerText = "81";
      } else if (cover < 56000) {
        principalValue.innerText = "35";
        cents.innerText = "97";
      } else if (cover < 71000) {
        principalValue.innerText = "45";
        cents.innerText = "78";
      } else if (cover < 86000) {
        principalValue.innerText = "55";
        cents.innerText = "59";
      } else if (cover < 101000) {
        principalValue.innerText = "65";
        cents.innerText = "40";
      } else if (cover < 126000) {
        principalValue.innerText = "81";
        cents.innerText = "75";
      } else if (cover < 151000) {
        principalValue.innerText = "98";
        cents.innerText = "10";
      } else if (cover < 176000) {
        principalValue.innerText = "114";
        cents.innerText = "45";
      } else if (cover < 201000) {
        principalValue.innerText = "130";
        cents.innerText = "80";
      } else if (cover < 251000) {
        principalValue.innerText = "163";
        cents.innerText = "50";
      } else if (cover < 301000) {
        principalValue.innerText = "196";
        cents.innerText = "20";
      }
    } else if (age < 56) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "39";
        cents.innerText = "89";
      } else if (cover < 56000) {
        principalValue.innerText = "53";
        cents.innerText = "52";
      } else if (cover < 71000) {
        principalValue.innerText = "68";
        cents.innerText = "11";
      } else if (cover < 86000) {
        principalValue.innerText = "82";
        cents.innerText = "71";
      } else if (cover < 101000) {
        principalValue.innerText = "97";
        cents.innerText = "30";
      } else if (cover < 126000) {
        principalValue.innerText = "121";
        cents.innerText = "63";
      } else if (cover < 151000) {
        principalValue.innerText = "145";
        cents.innerText = "95";
      } else if (cover < 176000) {
        principalValue.innerText = "170";
        cents.innerText = "28";
      } else if (cover < 201000) {
        principalValue.innerText = "194";
        cents.innerText = "60";
      } else if (cover < 251000) {
        principalValue.innerText = "243";
        cents.innerText = "25";
      } else if (cover < 301000) {
        principalValue.innerText = "291";
        cents.innerText = "91";
      }
    } else if (age < 61) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "54";
        cents.innerText = "37";
      } else if (cover < 56000) {
        principalValue.innerText = "72";
        cents.innerText = "93";
      } else if (cover < 71000) {
        principalValue.innerText = "92";
        cents.innerText = "82";
      } else if (cover < 86000) {
        principalValue.innerText = "112";
        cents.innerText = "71";
      } else if (cover < 101000) {
        principalValue.innerText = "132";
        cents.innerText = "60";
      } else if (cover < 126000) {
        principalValue.innerText = "165";
        cents.innerText = "75";
      } else if (cover < 151000) {
        principalValue.innerText = "198";
        cents.innerText = "90";
      } else if (cover < 176000) {
        principalValue.innerText = "232";
        cents.innerText = "05";
      } else if (cover < 201000) {
        principalValue.innerText = "265";
        cents.innerText = "20";
      } else if (cover < 251000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      } else if (cover < 301000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      }
    } else if (age < 65) {
      if (!cover || cover < 42000) {
        principalValue.innerText = "93";
        cents.innerText = "85";
      } else if (cover < 56000) {
        principalValue.innerText = "125";
        cents.innerText = "90";
      } else if (cover < 71000) {
        principalValue.innerText = "160";
        cents.innerText = "23";
      } else if (cover < 86000) {
        principalValue.innerText = "194";
        cents.innerText = "57";
      } else if (cover < 101000) {
        principalValue.innerText = "228";
        cents.innerText = "90";
      } else if (cover < 126000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      } else if (cover < 151000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      } else if (cover < 176000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      } else if (cover < 201000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      } else if (cover < 251000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      } else if (cover < 301000) {
        principalValue.innerText = "--";
        cents.innerText = "--";
      }
    }
    return principalValue.innerHTML, cents.innerHTML;
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
}

let ageUser = numberAge.innerHTML;
userGender = function () {
  if (radSex[0].checked) {
    return "Masculino";
  } else {
    return "feminino";
  }
};
userSmoke = (_) => {
  if (radsmok[0].checked) {
    return "Não Fumante";
  } else {
    return "Fumante";
  }
};
userJob = function (e) {
  console.log(e);
  showProfession.innerHTML = e;
};
function userMoney(s) {
  showMoney.innerText = `minha renda é de : ${s}`;
}

// monthlyIncome.addEventListener("input", function () {
//   return this.value;
// });

coverIpa = (_) => {
  if (selected[12].checked) {
    let ipa = "com cobertura ipa";

    return ipa;
  } else {
    let ipa = "sem cobertura ipa";
    return ipa;
  }
};
console.log(selected);
// função para pegar se quer antecipação por doença

// função para enviar o orçamento com as informações
sent.onclick = (_) => {
  let basicliCover = `Escolhi a cobertura básica no valor de: ${numberMoney.innerText}`;
  let coverLabelDeath = labelDeath.checked
    ? `cobertura em dobro no valor ${labelDeath.innerText}`
    : "sem cobertura em dobro";
  let profession = showProfession.innerText;
  let userMoney = showMoney.innerText;
  let antecipationIllnes = noAntecipation.checked
    ? `sem antecipação por doença`
    : `com antecipação por doença`;
  let medicalSpending = spending.checked
    ? `sem cobertura para despesas medico-hospitalares`
    : `com cobertura para despesas medico-hospitalares`;
  let moreIllnes = coverage1.checked ? `Sem cobertura para doenças graves` : `Sem cobertura para doenças graves`
  let plainMoney = principalValue.innerText
  let plainCents = cents.innerText
  // 18 Masculino Não Fumante   Escolhi a cobertura básica no valor de: 30.000,00 sem cobertura em dobro sem cobertura ipa sem antecipação por doença sem cobertura para despesas medico-hospitalares Sem cobertura para doenças graves 00 00
  window.location.href = `https://api.whatsapp.com/send?phone=5551985172153&text=
  Tenho%20${ ageUser},%20
  do sexo:%20${ userGender()},%20
  ${ userSmoke()},%20
  eu%20trabalho%20como:%20${ profession},%20
  recebo%20em%20média%20${ userMoney},%20
  ${ basicliCover},%20
  ${ coverLabelDeath},%20
  ${ coverIpa()},%20
  ${ antecipationIllnes},%20
  ${ medicalSpending},%20
  ${ moreIllnes},%20
  meu orçamento fechou num total de R$%20${ plainMoney},${plainCents}%20 mensais`;

};

// como capturar o valor dos selects

// function qulquerNome() {
//   let select = document.querySelector('#jobs')
//   let optionValue = select.options[select.selectedIndex];
//   let value = optionValue.value
//   console.log(value)
// }
