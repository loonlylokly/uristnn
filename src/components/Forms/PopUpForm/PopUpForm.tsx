"use client"

import { usePopUp } from "@/store";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from './PopUpForm.module.css';

type FormProps = {
  name: string;
  email: string;
  text: string;
};

const PopUpForm = () => {
  const togglePopUp = usePopUp((state) => state.togglePopUp); 
  const {
    reset,
		register,
		handleSubmit,
	} = useForm<FormProps>();

  const onSubmitForm: SubmitHandler<FormProps> = (data) => {
    fetch("/api/contact-form", {
      method: "POST",
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(data)
    }).then(res => {
      console.log("Request complete! response:", res);
    }).catch((error) => {
      console.log("Request error! error:", error);
    });
    reset();
    togglePopUp();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmitForm)}>
      <label className={styles.label}>Имя
        <input className={styles.input} type="text" id="name" autoComplete="name" {...register("name")}/>
      </label>
      <label className={styles.label}>Email
        <input className={styles.input} type="email" id="email" autoComplete="email" required {...register("email")}/>
      </label>
      <label className={styles.label}>Вопрос
        <textarea className={styles.input} id="text" rows={5} {...register("text")}></textarea>
      </label>
      <button className={`${styles.submit} btn btnPrimary`} type="submit">Отправить</button>
    </form>
  );
};

export default PopUpForm;
