import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if(isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="playyer-symbol">{symbol}</span>
      </span>
      <button 
        type="button" 
        onClick={() => setIsEditing((editing) => !editing)} // 함수를 사용해서 가장 최신의 값을 가져와 업데이트 해줍니다.
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}

