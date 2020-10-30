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

  horaLimite('Sep 25 2022 19:12:04 GMT-0300' , "clock", "Empieza el evento")

// hacer el marco interactivo

    // json informacion de Equipos
  datos=[
    { titulo:"EMK",
      texto:" eMonkeyz nació en noviembre de 2015 de la fusión de Celerius e-Sports , club con una larga historia en la escena nacional, y Bananized , grupo de profesionales con amplia experiencia en el sector de los deportes.",
      jugadores:"../webRivals/src/Jugadores/Monkey/monkeyTeam.png",
    },
    { titulo:"Penguins",
      texto:"Penguins es un club profesional de deportes electrónicos fundado en enero de 2016. Anteriormente se conocían como The G-Lab Penguins y The Penguins Mafia.",
      jugadores:"../webRivals/src/Jugadores/Penguien/teamPenguin.png"
    },
    //va atener mas datos
    { titulo:"S2V",
      texto:"S2V Esports pertenece a S2V Digital Sports, una empresa española que se unió al negocio de esports en 2016.",
      jugadores:"../webRivals/src/Jugadores/S2V/teamS2V.png"
    },
    { titulo:"Splyce Vipers",
      texto:"Splyce es una organización de esports estadounidense con un equipo de la Liga Europea de Leyendas. La organización fue adquirida por OverActive Media en noviembre de 2018. Anteriormente se conocían como Follow eSports",
      jugadores:"../webRivals/src/Jugadores/Slyce/teamStyle.png"
    },
    { titulo:"Team Queso",
      texto:"Team Queso es un equipo español que compite en varios juegos. Actualmente están compitiendo como Telepizza Team Queso después del primer aniversario con su patrocinador Telepizza.",
      jugadores:"../webRivals/src/Jugadores/TeamQueso/teamTeamQueso.png"
    },
  ]//no cerrar en json

    var marco=document.getElementById("marco");

        function crearEtiquetas(){
          // despues definir clases e ids para las etiquetas
          let titulo_h2=document.createElement("h2");
          titulo_h2.setAttribute("id","titulo");

          let parrafo_p=document.createElement("p");
          parrafo_p.setAttribute("id","texto");

        // preparacion de columna
          let div_aling=document.createElement("div");
          div_aling.setAttribute("class","columna");

          let jugadores_img=document.createElement("img");
          jugadores_img.setAttribute("id","jugador");
          div_aling.appendChild(titulo_h2);
          div_aling.appendChild(parrafo_p);
          marco.appendChild(div_aling);
          marco.appendChild(jugadores_img);

        };

        crearEtiquetas();

        function buscarEquipos(n){
          let elementos=datos[n];
          let tituloDOM = document.getElementById("titulo");
          tituloDOM.innerHTML = elementos.titulo;
          let textoDOM = document.getElementById("texto");
          textoDOM.innerHTML = elementos.texto;
          let imagenDOM = document.getElementById("jugador");
          imagenDOM.src = elementos.jugadores;

        };


        //carga la info del equipo segun el numero del array

        function cargaInfo(){
            let numeroDeEquipo=this.getAttribute("data-numero");
            //el numero que toma la data es el numero de equipo
            buscarEquipos(numeroDeEquipo);
        };
          var claseSumar= document.getElementsByClassName("link-equipo");

        for(var i=0;i < claseSumar.length; i++){
          claseSumar[i].addEventListener('click', cargaInfo , false);

        };
