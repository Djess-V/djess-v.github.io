import React from "react";
import audio1 from "../../assets/mp3/lady_gaga_-_shallow.mp3";
import audio2 from "../../assets/mp3/Michael_Jackson_-_Smooth_Criminal_47829994.mp3";
import audio3 from "../../assets/mp3/DDT_-_Lyubov_ne_propala_56565425.mp3";
import audio4 from "../../assets/mp3/Bremenskie_Muzykanty_-_Solnce_vzajjdet_62922182.mp3";
import audio5 from "../../assets/mp3/Jackson_Wang_-_Blow_74011203.mp3";

export const audioList = [
  { name: "Lady Gaga - Shallow", link: audio1 },
  { name: "Michael Jackson - Smooth Criminal", link: audio2 },
  { name: "ДДТ - Любовь не пропала", link: audio3 },
  { name: "Бременские музыканты - Луч солнца золотого", link: audio4 },
  { name: "Jackson Wang - Blow", link: audio5 },
];

let AudioMenu = ({
  pressedButtonUpDown,
  pressedButtonEnter,
  raiseSelectionPositionAudio = (f) => f,
  raiseAudio = (f) => f,
  onAudio = (f) => f,
  lossOfFocusAudioMenu = (f) => f,
}) => {
  const [songActive, setSongActive] = React.useState(0);

  const lis = audioList.map((item, i) => (
    <li
      className={`audio_list_item ${songActive === i ? "songActive" : ""}`}
      key={item.name}
    >
      <a
        href={item.link}
        onClick={(e) => {
          e.preventDefault();
          raiseSelectionPositionAudio(i);
          raiseAudio(e);
          onAudio();
        }}
        onPointerOver={() => raiseSelectionPositionAudio(i)}
      >
        {item.name}
      </a>
    </li>
  ));

  const changeSongActive = () => {
    setSongActive(pressedButtonUpDown);
  };

  React.useEffect(() => {
    changeSongActive();
  }, [pressedButtonUpDown]);

  React.useEffect(() => {
    if (pressedButtonEnter > 0) {
      raiseSelectionPositionAudio(songActive);
      raiseAudio(audioList[songActive].link);
    }
  }, [pressedButtonEnter]);

  return (
    <div
      className="audio_list_modal"
      onPointerOut={(e) => {
        if (e.relatedTarget.tagName === "DIV") {
          lossOfFocusAudioMenu();
        }
      }}
    >
      <h1>Выберите композицию:</h1>
      <ul>{lis}</ul>
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

AudioMenu = React.memo(AudioMenu);

export default AudioMenu;
