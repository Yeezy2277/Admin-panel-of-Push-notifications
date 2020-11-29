import React, {useState} from "react";
import styles from "./app.module.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {sendPush} from "./redux/PushReducer";
import {renderAdminPanel} from "./renderAdminPanel";

function AdminPanel() {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    
    const onTitleChange = (evt) => {
      setTitle(evt.target.value);
      renderAdminPanel();
    }
    const OnDescriptionChange = (evt) => {
      setDescription(evt.target.value);
        renderAdminPanel();
    }
    const setPush = () => {
        fetch(`https://pushall.ru/api.php?type=broadcast&id=5532&key=9679936daf74cb54224168fd049e3bc9&title=${title}&text=${description}`
            ,{ method: 'POST'})
            .then(response => response.json())
    }
  return (
  <div className={styles.main}>
      <form className={styles.mainForm}>
          <h1>Отправка пуш-запросов</h1>
          <TextField id="standard-basic" onChange={onTitleChange} value={title} label="Заголовок" />
          <TextField id="standard-basic"  onChange={OnDescriptionChange} value={description} label="Текст" />
          <Button variant="contained" color="primary" type='button' onClick={setPush}>Запушить</Button>
      </form>
  </div>
  );
}

export default connect(null,{sendPush})(AdminPanel);
