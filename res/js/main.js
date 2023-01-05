let qna = ["Jaká je nejyšší hora Česka?", "Kolik má auto kol?", "Kdo nepatří mezi Simsnovi?", "Kdo založil povinnou školní docházku?", "Kolik je 1+1?", "Kolik má člověk nohou?", "Je Java stejná jako JavaScript?", "Je === stejné jako == ?", "Kolik má trojlístek lístků?", "Patří modřín mezi opadavé stromy?"];
const penizky = [100, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000]
let otazka = document.getElementsByClassName("otazka");
let btn = document.getElementById("btn");
let button =document.getElementsByClassName("btn");
let text1 = document.getElementsByClassName("text1");
let text2 = document.getElementsByClassName("text2");
let text3 = document.getElementsByClassName("text3");

let pocet = document.getElementsByClassName("pocet");
let answersUsed = 0;
let money = 0;
let x = false;

//vybere random otazku z pole
 let aa = qna[Math.floor(Math.random() * qna.length)];
//po kliknutí na start vygeneruje otazku a odpoved
 btn.onclick = () => {
    otazka[Math.floor(Math.random() * otazka.length)].innerHTML = `${aa}`;
 btn.innerHTML = "Další";
if(qna[0] == aa){text1[0].innerHTML = "Sněžka";
text2[0].innerHTML = "Říp";
text3[0].innerHTML = "Lysá hora";


text1[0].onclick = () => {
text1[0].style.background = "orange";
button[0].onclick = () => {
text1[0].style.background = "green";
text2[0].style.background = "red";
text3[0].style.background = "red";
} 
}
text2[0].onclick = () => {
text2[0].style.background = "orange";
button[0].onclick = () => {
 text1[0].style.background = "green";
text2[0].style.background = "red";
text3[0].style.background = "red";
 }
 }
text3[0].onclick = () => {
text3[0].style.background = "orange";
button[0].onclick = () => {
text1[0].style.background = "green";
text2[0].style.background = "red";
text3[0].style.background = "red"; 
}
}
}

if(qna[1] == aa){
text1[0].innerHTML = "Dvě";
text2[0].innerHTML = "Tři";
text3[0].innerHTML = "Čtyři";

text1[0].onclick = () => {
text1[0].style.background = "orange"; 
button[0].onclick = () => {
text1[0].style.background = "red";
text2[0].style.background = "red";
text3[0].style.background = "green";

 } 
}
text2[0].onclick = () => {
text2[0].style.background = "orange";
button[0].onclick = () => {
text1[0].style.background = "red";
text2[0].style.background = "red";
text3[0].style.background = "green"; 
}
}
text3[0].onclick = () => {
text3[0].style.background = "orange";
button[0].onclick = () => {
text1[0].style.background = "red";
text2[0].style.background = "red";
text3[0].style.background = "green"; 
}
}

}


if(qna[2] == aa){

    text1[0].innerHTML = "Bart";

    text2[0].innerHTML = "Lisa";

    text3[0].innerHTML = "Till";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "red";

            text3[0].style.background = "green";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "red";

            text3[0].style.background = "green";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "red";

            text3[0].style.background = "green";  

        }

    }



}



if(qna[3] == aa){

    text1[0].innerHTML = "Marie Terezie";

    text2[0].innerHTML = "Honza Hrouda";

    text3[0].innerHTML = "Tomás Jedno";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }



}



if(qna[4] == aa){

    text1[0].innerHTML = "1";

    text2[0].innerHTML = "2";

    text3[0].innerHTML = "11";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "green";

            text3[0].style.background = "red";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "green";

            text3[0].style.background = "red";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "green";

            text3[0].style.background = "red";  

        }

    }



}



if(qna[5] == aa){

    text1[0].innerHTML = "2";

    text2[0].innerHTML = "3";

    text3[0].innerHTML = "1";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }
}
if(qna[6] == aa){

    text1[0].innerHTML = "Ano";

    text2[0].innerHTML = "Ne";

    text3[0].innerHTML = "Nevím";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "green";

            text3[0].style.background = "red";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "green";

            text3[0].style.background = "red";  

        }
    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "green";

            text3[0].style.background = "red";  

        }
    }
}

if(qna[7] == aa){

    text1[0].innerHTML = "ano";

    text2[0].innerHTML = "nevím";

    text3[0].innerHTML = "ne";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "red";

            text3[0].style.background = "green";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "red";

            text3[0].style.background = "green";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "red";

            text2[0].style.background = "red";

            text3[0].style.background = "green";  

        }
    }
}
if(qna[8] == aa){

    text1[0].innerHTML = "tři";

    text2[0].innerHTML = "čtyři";

    text3[0].innerHTML = "dva";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }



}



if(qna[9] == aa){

    text1[0].innerHTML = "ano";

    text2[0].innerHTML = "ne";

    text3[0].innerHTML = "nevím";

   

    text1[0].onclick = () => {

        text1[0].style.background = "orange";  

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";

        }  

    }

    text2[0].onclick = () => {

        text2[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }

    text3[0].onclick = () => {

        text3[0].style.background = "orange";

        button[0].onclick = () => {

            text1[0].style.background = "green";

            text2[0].style.background = "red";

            text3[0].style.background = "red";  

        }

    }

}
}
