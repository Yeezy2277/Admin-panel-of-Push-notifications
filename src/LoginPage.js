import React, {useEffect, useState} from "react";
import styles from "./app.module.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {sendPush} from "./redux/PushReducer";
import {rerenderEntireTree} from "./render";
import AdminPanel from "./AdminPanel";
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import {renderAdminPanel} from "./renderAdminPanel";
const data =  require( "./data.json");

function LoginPageForm() {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [isLogin,setIsLogin] = useState(null)

    useEffect(() => {
        return <Redirect from="*" to="/"/>
    },[])

    const onLoginChange = (evt) => {
        setLogin(evt.target.value);
        rerenderEntireTree();
    }
    const onPasswordChange = (evt) => {
        setPassword(evt.target.value);
        rerenderEntireTree();
    }

    const isCorrect = () => {
        if (data.login === login && data.password === password) {
            setIsLogin(true);
        }
        else {
            setIsLogin(false);
        }

        }
  return (
  <div className={styles.main}>
      <form className={styles.mainForm}>
          <h1>Авторизация</h1>
          <TextField id="standard-basic" onChange={onLoginChange} value={login} label="Логин" />
          <TextField id="standard-basic" onChange={onPasswordChange} value={password} label="Пароль" />
          <Button variant="contained" color="primary" onClick={isCorrect} type="button">Войти</Button>
          {isLogin === true ? renderAdminPanel(): null}
          {isLogin === false ? <p>Неправильный логин или пароль</p> : null}
      </form>
  </div>
  );
}
const LoginPageReduxForm = reduxForm({
    form: 'login'
})(LoginPageForm);

const LoginPage = (props) => {
    const onSubmit = (formData) => {
        props.sendPush(formData.title, formData.text);
    }
    return <div>
        <LoginPageReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null,{sendPush})(LoginPage);
