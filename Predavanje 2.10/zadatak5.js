let X;
// ZA X=1 ISPISUJE 2, DEFAULT I 3, ZATO STO TEK U CASE 3 NAILAZI NA BREAK
//ZA X=5; IZBACILO BI GRESKU DA JE U DEFAULTU BILO BREAK, OVAKO SAMO PRODJE KROZ SVE
//X=1, X=5
switch (X) {
    case 1:
    case 2:
        console.log(2);
    default:
        console.log("default");
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
}

/*Koje 3 vrst promenljivih postoje u javascriptu? Koje su njihove specificne odlike?*/
/*
  to su VAR, LET i CONST

  LET je varijabla koja postoji samo u skoupu gde se deklarise. Let je pogodna za koriscenje u iteracijama petlji jer se tako program oslobadja nepoitrebnih resursa. I isto ime mozemo da koristimo ponovo u daljem radu.

  VAR je globalna varijabla i vidljiva je i u drugim skoupovima
  
  CONST varijablama definisemo vrednost koja ce nam biti nepormenjiva u toku rada, npr. ako negde definisemo konstantnu vrednost const Pi = 3.14
*/