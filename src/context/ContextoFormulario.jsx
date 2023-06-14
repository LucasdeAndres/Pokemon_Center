// Aqui debemos crear nuestro contexto y nuestro provider.

import { createContext, useState } from "react";

/**
 * Contexto del formulario.
 *
 * @type {React.Context}
 */

export const FormContext = createContext();


/**
 * Proveedor del contexto del formulario.
 *
 * @component
 * @param {Object} props Propiedades del componente.
 * @param {React.ReactNode} props.children Los elementos secundarios que serán envueltos por el proveedor.
 * @returns {JSX.Element} Elemento JSX que representa el proveedor del contexto del formulario.
 */

export const FormProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        nombrePokemon: "",
        especie: "",
        tipos: "",
        altura: "",
        edad: ""
    });

        /**
     * Actualiza los datos del formulario.
     *
     * @param {string} name El nombre del campo del formulario.
     * @param {string} value El valor del campo del formulario.
     */

    const updateFormData = (name, value) => {
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <FormContext.Provider value={{formData, updateFormData}}>
            {children}
        </FormContext.Provider>
    )

};