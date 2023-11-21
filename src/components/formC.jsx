/* eslint-disable react/prop-types */

export const FormComponet = ({children}) => {
  return (
    <>
      <h2>Registro De Usuario</h2>

      <form>
        {children}
        <button type="submit">Registrar</button>
      </form>
    </>
  );
}
