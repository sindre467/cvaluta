// var antall = document.getElementById('antall').value;
// var tme = document.getElementById('tid-sone').value;
// var rentelån = document.getElementById('rentelån').value;
// var arrayForResultat = [];
var antall = 0;
var tme = 0;
var rentelån= '';
var lån = 0;
var input = '';
var email;
var check;


const model = {
    payments: '',
    minMaxPayments: [],
    minMaxYear: '',
    extendedPayments: [],
    Loanintrest: '',
    minMaxIntrest: [],
}

var input = [
    
       {payments:'payments',
        minMaxPayments:[
               10.000,
               500.000,
        ]
      },
        
       {minMaxYear: 'Loan',
        extendedPayments: [
              '6måneder',
              '25år',
        ]
      },
    
      {loanIntrest: '%',
       minMaxIntrest: [
              '5%',
              '15%',
        ]
      },
   ];