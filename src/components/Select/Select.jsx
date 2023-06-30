import React, { useContext } from 'react'
import { FormContext } from '../../context/ContextoFormulario';
import "./Select.css"

export const Select = ({name, label, data}) => {

    const { updateFormData } = useContext(FormContext)

    const onBlur = (e) => {
        e.preventDefault();
    
        console.log(e.target.id);
        console.log(e.target.value);
    
        updateFormData(e.target.id, e.target.value)
      };

  return (
    <div className='select'>
         <select name={name} label={label} onBlur={onBlur} id={name}>
                <option value="">Seleccionar</option>
                {data.map(type =>{
                  return <option key={type.name} value={type.name} id={name}>{type.name}</option>
                })}
        </select>
    </div>
  )
}
