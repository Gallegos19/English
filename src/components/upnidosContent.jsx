import React from "react";
import News from "./news";
import Style from '../css/upcontent.css'
import img from '../assets/julio.jpeg'
import img2 from '../assets/julian.jpeg'
import Aud1 from "../assets/Audios/respuesta1Julio.ogg";
import Aud2 from "../assets/Audios/respuesta2Julio.ogg";
import Aud3 from "../assets/Audios/respuesta3Julio.ogg";
import Aud4 from "../assets/Audios/respuesta4Julio.ogg";
import Aud5 from "../assets/Audios/respuesta5Julio.ogg";
import Aud6 from "../assets/Audios/respuesta1Julian.mp4";
import Aud7 from "../assets/Audios/respuesta2Julian.mp4";
import Aud8 from "../assets/Audios/respuesta3Julian.mp4";
import Aud9 from "../assets/Audios/respuesta4Julian.mp4";
import Aud10 from "../assets/Audios/respuesta5Julian.mp4";

export default function upnidosContent() {
  return (
    <div className="ContainerNews">
      <News
        title="What are your hobbies"
        autor="Julian"
        text="Well i usually play video games in my house or sometimes i read monwhas"
        audio={Aud6}
      />
       <News
        title="What are your hobbies"
        autor="Julio"
        audio={Aud1}
        text="I really like to watch stremers in spanish for example Auronplay, Quackity, Roier, LarzRicaldi. Some streams is GTA5 roleplay i like it"      />
       <News
        title="Can you play a instrumental music?"
        autor="Julian"
        audio={Aud7}
        text="not, i dont like playing instrument, i try playing guittar but i dont have a talent music"      />
      <div className="contenedor-img">
      <img src={img} alt="" className="imagen"/>
      </div>
       <News
        title="Can you play a instrumental music?"
        autor="Julio"
        audio={Aud2}
        text="Yes, I play some flute and drum every january for traditional fest of Chiapa de Corzo and other some ocations "     />
       <News
        title="What else do you enjoy doing in your free-time?"
        autor="Julian"
        audio={Aud8}
        text="When I am reading manejas the category that more read is Isekais or romance the best manejas is TBATE ,Eleeced,sólo leveling or player"      />
       <News
        title="What else do you enjoy doing in your free-time?"
        autor="Julio"
        audio={Aud3}
        text="I read mistery books, i play videogames like Valorant, Rocket Ligue, Fortnite. And learnig new program languages"       />
        <div className="contenedor-img">
         <img src={img2} alt="" className="imagen"/>
         </div>
        <News
        title="Are you good at sport?"
        autor="Julian"
        audio={Aud9}
        text="Yeah, i´m good in Ea sport but in really sports i´m good the only sport tha i play is volleyball"       />
        <News
        title="Are you good at sport?"
        autor="Julio"
        audio={Aud4}
        text="I consider myself good at basquetball and volleyball, i usually play everyweekends with my sister. "       />
       <News
        title="Are you interested in leaning new things?"
        autor="Julian"
        audio={Aud10}
        text="Yes i usually learn new heghmologies in programing"       />
       <News
        title="Are you interested in leaning new things?"
        autor="Julio"
        audio={Aud5}
        text="yes, i like the idea of learning new things in my free time.
        I´d like like to learn Mountain climbing or inclusive new hobbies"/>
                  
    </div>
  );
}
