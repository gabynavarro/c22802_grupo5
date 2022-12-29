import React,{useState} from 'react';
import Nav from '../../components/sharedComponent/nav/Nav';
import Footer from '../../components/sharedComponent/footer/footer';
import '../auth/auth.css'
const Auth = () => {

    const [isLogin, setIsLogin] = useState(true);

    return (

        <div className="container-principal">
            <Nav />
            <div className="contaienr-form">
                <form className="LoginScreen" onSubmit>
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
