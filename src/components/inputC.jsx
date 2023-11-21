/* eslint-disable react/prop-types */

export const InputC = ({ type, id, name, placeholder }) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
}

