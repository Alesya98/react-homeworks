import { Formik, Form, Field, ErrorMessage, FastField } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Имя обязательно"),
    email: Yup.string().email("Неверный email").required("Email обязателен"),
    password: Yup.string()
      .required("Пароль обязательно")
      .min(6, "Минимальная длина 6 символов")
      .matches(/[A-Z]/, "Хотя бы одна заглавная буква"),
    reapitPassword: Yup.string()
      .required("Подтвердите пароль")
      .oneOf([Yup.ref("password")], "Пароли должны совпадать"),
    birthDate: Yup.string().required("Дата рождения обязательна"),
    gender: Yup.string().required("Пол обязателен"),
    tel: Yup.string().required("Телефон обязателен"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        reapitPassword: "",
        birthDate: "",
        gender: "",
        tel: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => alert(JSON.stringify(values))}
    >
      <Form>
        <h3>Заполни Форму</h3>
        <div>
          <label htmlFor="name">Имя пользователя</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Введите Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Введите пароль</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <label htmlFor="reapit">Повторите пароль</label>
          <Field type="password" id="reapit" name="reapitPassword" />
          <ErrorMessage name="reapitPassword" component="div" />
        </div>

        <div>
          <label htmlFor="birthDate">Введите дату рождения</label>
          <Field type="date" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>

        <div>
          <label htmlFor="gender">
            <Field type="radio" name="gender" value="male" />
            Мужчина
          </label>
          <label htmlFor="gender">
            <Field type="radio" name="gender" value="female" />
            Женщина
          </label>
          <ErrorMessage name="gender" component="div" />
        </div>

        <div>
          <label htmlFor="tel">Введите телефон</label>
          <Field
            type="tel"
            id="tel"
            name="tel"
            placeholder="+375() xxx-xx-xx"
          />
          <ErrorMessage name="tel" component="div" />
        </div>

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
