import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {

    const [playerName,setPlayerName] = useState(initialName)
    const [isEditable,setIsEditable] = useState(false)

    function handleChangeName(event){
        setPlayerName(event.target.value)
    }

    function handleEditClick (){
        setIsEditable((editable) => !editable)
    }

    let EditableName = <span className="player-name">{playerName}</span>

    if (isEditable){
        EditableName = <input type = 'text' required value = {playerName} onChange={handleChangeName}/>
    }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {EditableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditable ? 'Save' : 'Edit'}</button>
    </li>
  );
}

