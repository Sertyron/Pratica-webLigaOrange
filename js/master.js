// Reloj

const getRemainTime = deadline => {
  let now=new Date(),
    remainTime= (new Date(deadline)-now+1000) /1000  ,
    remainSecond=("0"+ Math.floor(remainTime%60)).slice(-2),
    remainMinute=("0"+ Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours=("0"+ Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays=Math.floor(remainTime /(3600 * 24));

    return {
      remainTime,
      remainSecond,
      remainMinute,
      remainHours,
      remainDays,

    }
}

console.log(getRemainTime("on Jul 15 2019 19:34:38 GMT-0300"));

const horaLimite= (deadline , elem , finalMessage) =>{
    const el = document.getElementById(elem);

    const tiempoActualizado= setInterval( () =>{
        let t=getRemainTime(deadline)
        el.innerHTML = `${t.remainDays} : ${t.remainHours} : ${t.remainMinute} : ${t.remainSecond}`;

        if (t.remainTime<=1){
          clearInterval(tiempoActualizado);
          el.innerHTML=finalMessage;
        }

    }, 1000)
};

  horaLimite('Mon Sep 25 2019 19:12:04 GMT-0300' , "clock", "Empieza el evento")

// hacer el marco interactivo

    // json informacion de Equipos
  datos=[
    { titulo:"EMK",
      texto:"eMonkeyz nació en noviembre de 2015 de la fusión de Celerius e-Sports , club con una larga historia en la escena nacional, y Bananized , grupo de profesionales con amplia experiencia en el sector de los deportes.",
      jugadores:"../WebRivals/src/Jugadores/Monkey/220px-EMK_DuaLL_2019_Split_2.png"
    },
    /*{ titulo:"EMK",
      texto:"eMonkeyz nació en noviembre de 2015 de la fusión de Celerius e-Sports , club con una larga historia en la escena nacional, y Bananized , grupo de profesionales con amplia experiencia en el sector de los deportes.",
      jugadores:"../src/Jugadores/220px-EMK_DuaLL_2019_Split_2.png"
    },
    { titulo:"EMK",
      texto:"eMonkeyz nació en noviembre de 2015 de la fusión de Celerius e-Sports , club con una larga historia en la escena nacional, y Bananized , grupo de profesionales con amplia experiencia en el sector de los deportes.",
      jugadores:"../src/Jugadores/220px-EMK_DuaLL_2019_Split_2.png"
    },*/
  ];

    var marco=document.getElementById("marco");

        function crearEtiquetas(){
          // despues definir clases e ids para las etiquetas
          let titulo_h2=document.createElement("h2");
          titulo_h2.setAttribute("id","titulo");

          let parrafo_p=document.createElement("p");
          parrafo_p.setAttribute("id","texto");

          let jugadores_img=document.createElement("img");
          jugadores_img.setAttribute("id","jugador");
          marco.appendChild(titulo_h2);
          marco.appendChild(parrafo_p);
          marco.appendChild(jugadores_img);

        };

        crearEtiquetas();

        function buscarEquipos(n=0){
          let elementos=datos[n];
          let tituloDOM = document.getElementById("titulo");
          tituloDOM.innerHTML = elementos.titulo;
          let textoDOM = document.getElementById("texto");
          textoDOM.innerHTML = elementos.texto;
          let imagenDOM = document.getElementById("jugador");
          imagenDOM.src = elementos.jugadores;

        };

        buscarEquipos();

        //carga la info del equipo segun el numero del array

        /*function cargaInfo(){
            let numeroDeEquipo=this.getAttribute("data-numero");

        };
          var claseSumar= document.getElementByClassName("link-equipo");

        for(var i=0;i < claseSumar.length; i++){
          claseSumar[i].addEventListener('click', cargaInfo , false);

        };

        cargaInfo();*/
