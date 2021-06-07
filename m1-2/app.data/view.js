updateView();
function updateView() {
  let mainHtml = '';
  mainHtml = `<h2>CreditorCare™</h2><hr>
    <div id="yearRange"></div>
    <div id="" class="box-pane">
      <div id="" class="info-pane">
        <div id="form>"></div>
        <label for="antall"
          ><small>Hvor mye kunne du ønsket å lånt?</small></label
        ><br />
        <input 
            placeholder="500.000,- max sum:" 
            autocomplete="off"
            id="antallx"
            onchange="antall = this.value" 
            value="${antall}"
        />
        <br /><br />
      </div>
      <label for="time-zone"
        ><small>Hvor mange år vill du ha lånet for?</small></label
      ><br />
      <input 
        type="number" 
        placeholder="25 år max" 
        id="time-zone"  
        onchange="tme = this.value" 
        value="${tme}"
      />
      <br /><br />
      <label for="rentelån"><small>Rentelån?</small></label
      ><br />
      <input 
        type="number" 
        placeholder="5-15 %:" 
        id="rente-lån"
        autocomplete="off"
        onchange="rentelån = this.value" 
        value="${rentelån}" 
      />
      <br /><br />
      <input
        type="button"
        value="Resultatet"
        id="res"
        onclick="kalkulerPRY()"
      />
      <br /><br />
      <div id="resultat">${lån} </div>
    </div> `;
  document.getElementById("app").innerHTML = mainHtml;
}



function login() {
  let mail = document.getElementById("email").value;
  let filex = document.getElementById("use").value;
  
  const filter = /^( [a-zA-Z0-9_\.\-] )+\@(( [a-zA-Z0-9\-] )+\.)+( [a-zA-Z0-9] {2,4})+$/;
  if (mail === "") {
    alert("Legge inn en mail først");

  } else if (filex == "") {
    alert("Nå fyll først ut passordet ditt");

  } else if (!filter.test && mail) {
    alert("Vennligst velg en gyldig email.ID");

  } else if (filex.length < 6 || filex.length <= 7) {
    alert("heisann! prøv igjen, en lengde på 7");
  
  } else {
    alert("Fantastisk arbeid, nå er vi endelig i mål!");
    window.location = "index.html";

    // const filter =
    //   /^( [a-zA-Z0-9_\.\-] )+\@(( [a-zA-Z0-9\-] )+\.)+( [a-zA-Z0-9] {2,4})+$/;  // regExr.com
  }
     

}

function Payments() {
  let html;
  html += `<div id="antall"></div>
    <select oninput="minMaxPayments(this.value)`;
  // var payments
  // payments = [];
  for (var i = 0; i < model.payments.minMaxPayments; i++) {
    if (i === model.payments) {
      html += `<select value="${i}">${model.input.payments[i].minMaxPayments}</select>`;
    } else {
      html += `<option value="${i}">${model.input.payments[i].minMaxPayments}</option>`;
    }
  }
}
function minMaxYear() {
    let html;
    html+=`<div id="time-zone"></div>
    <select oninput="minMaxYear(this.value)`;
    // var payments
    // payments = [];
    for (var y = 0; y < model.minmaxYear.extendedPayments; y++) {
    if( y === model.minMaxYear) {
        html += `<select value="${y}">${model.input.minMaxYear[y].extendedPayments}</select>`
   }else {
    html += `<option value="${y}">${model.input.minMaxYear[y].extendedPayments}
    </option>`;
    }
  }
}
function loanIntrest() {
    let html;
    html+=`<div id="rentelån"></div>
    <select oninput="minMaxIntrest(this.value)`;
    // var payments
    // payments = [];
    for (var x = 0; x < model.loanIntrest.minMaxIntrest; x++) {
    if( x === model.payments) {
        html += `<select value="${x}">${model.input.loanIntrest[x].minMaxIntrest}
        </select>`
   }else {
    html += `<option value="${x}">${model.input.loanIntrest[x].minMaxIntrest}
    </option>`;
    }
  }
}
