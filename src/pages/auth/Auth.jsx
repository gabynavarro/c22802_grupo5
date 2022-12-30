import React,{useState,useEffect} from 'react';
import Nav from '../../components/sharedComponent/nav/Nav';
import Footer from '../../components/sharedComponent/footer/footer';
import {collection,addDoc,doc } from 'firebase/firestore'
import {db} from '../../components/utils/Fire'
import '../auth/auth.css'
import { useNavigate } from 'react-router-dom';


const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [addUser, setAddUser]=useState("");
    const [addEmail,setEmail]=useState("")
    const [addPws,setPws]=useState("")
    const navigate=useNavigate();
    
    const usersCollection=collection(db, "usuario")
    const objetUser=async (e)=>{
        e.preventDefault()
        await addDoc(usersCollection,{nombre: addUser,email:addEmail,pws:addPws })
        console.log(addUser)
        navigate("/")
    }

    return (

        <div className="container-principal">
            <Nav />
            <div className="contaienr-form">
                <form className="LoginScreen" onSubmit={objetUser}>
                    <div className="wrapper-auth">
                        <h2 className="wrapper-auth__title">
                            <div>{isLogin ? "Crear Cuenta" : "Iniciar Sesion"}</div>
                        </h2>
                        <div className="inputContainer">
                            {isLogin ? (

                                <label className="wrapper-auth__label">Nombre Completo</label>
                            ) : (
                                ""
                            )}
                            {isLogin ? (
                                <input
                                    className="wrapper-auth__input"
                                    type="text"
                                    placeholder="Ingresa tu nombre completo"
                                    required
                                    value={addUser}
                                    onChange={(e)=>setAddUser(e.target.value)}
                                // ref={nameInputRef}
                                />
                            ) : (
                                ""
                            )}</div>
                        <div className="inputContainer">
                            <label className="wrapper-auth__label">Correo Electronico</label>
                            <input
                                className="wrapper-auth__input"
                                type="text"
                                placeholder="Ingresa tu correo"
                                required
                                value={addEmail}
                                onChange={(e)=>setEmail(e.target.value)}
                            //   ref={emailInputRef}
                            />
                        </div>
                        <div className="inputContainer">
                            <label className="wrapper-auth__label">Constraseña</label>
                            <input
                                className="wrapper-auth__input"
                                type="password"
                                placeholder="Ingresa la contraseña"
                                required
                                value={addPws}
                                    onChange={(e)=>setPws(e.target.value)}
                            //   ref={passwordInputRef}
                            />
                            <span className="wrapper-auth__info">
                                Debe contener caracteres con letras y numeros{" "}
                            </span>
                        </div>

                        <div className="wrapper-auth__footer">
                            <span className="wrapper-auth__footer__cuenta">
                                {isLogin ? "¿ Tienes una cuenta ?" : "¿ Aun no tienes cuenta ?"}
                            </span>
                            <button
                                type="button"
                                className="wrapper-auth__footer__register"
                            // onClick={switchAuthModeHandler}
                            >
                                {isLogin ? "Log In" : "Registrarse"}
                            </button>
                        </div>
                        <button className="button button--blue mt-btn">
                            {isLogin ? "Registrarse" : "Iniciar Sesion"}
                        </button>
                    </div>
                </form>              
            </div>
            <Footer />
        </div>

    );
}

export default Auth;
