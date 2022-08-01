import React, { useRef } from "react";
import Image from 'next/image';
import logo from '@logos/logo-Aynimar.svg';
import { addCustomers } from '@services/api/entities';
import styles from '@styles/Login.module.scss';

const SignUp = () => {
  const nameReff = useRef(null);
  const lastNameReff = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const name = nameReff.current.value;
    const lastName = lastNameReff.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const data = {
      name,
      lastName,
      email,
      password
    }

    console.log(data);
    addCustomers(data).then(() => {
      console.log(response);
    });
  };

    return (
      <div className={styles.login}>
      <div className={styles['login-container']}>
        <Image src={logo} width={100} height={100} className={styles.logo}/>
        <h1 className={styles.title}>Registro de cliente</h1>

        <form action="/" className={styles.form} onSubmit={submitHandler} autoComplete="on">
          <div className={styles.form} >
            <label htmlFor="name"className={styles.label}>Nombre/s</label>
            <input type="text"
            autoComplete="name"
            name="name"
            id="name"
            required
            placeholder="Inés"
            className={styles.input}
            ref={nameReff} 
            />
            {'\n'}
            <label htmlFor="last-name" className={styles.label} >Apellido/s</label>
            <input type="text"
            autoComplete="family-name"
            name="last-name"
            id="last-name"
            required
            placeholder="Esario Lopez Khe"
            className={styles.input}
            ref={lastNameReff} 
            />
            {'\n'}
            <label htmlFor="email-address" className={styles.label}>Email</label>
            <input type="email" 
            id="email-address"
            name="email"
            autoComplete="email"
            required
            placeholder="nombre@mail.com" 
            className={styles.input} 
            ref={emailRef} />
           {'\n'}
            <label htmlFor="password" className={styles.label}>Contraseña</label>
            <input type="password" 
            id="password" 
            required
            className={styles.input} 
            placeholder="***Contraseña***"
            ref={passwordRef} />
            {'\n'}
          </div>

          <button type="submit" 
          className={(styles['primary-button'], styles['login-button'])}>
          Registrarse
          </button>
        </form>
      </div>
    </div>
    );
};

export default SignUp;