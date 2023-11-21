import "./App.css";
import { FormComponet } from "./components/formC";
import { InputC } from "./components/inputC";

function App() {
  return (
    <>
      <FormComponet>
        <InputC type="text" id="nombre" name="nombre" placeholder="Nombre:" />
        <InputC type="text"id="apellido"name="apellido" placeholder="Apellido:" />
        <InputC type="email" id="email" name="email" placeholder="Email" />
        <InputC type="tel"id="telefono"name="telefono"placeholder="Teléfono:"/>
        <InputC type="password"id="password"name="password"placeholder="Contraseña:"/>
        <InputC type="password"id="confirmPassword"name="confirmPassword"placeholder="Confirmar Contraseña:"/>
      </FormComponet>
    </>
  );
}

export default App;
