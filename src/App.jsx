import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import { FormPage } from "./pages/FormPage/FormPage";
import { FormProvider } from "./context/ContextoFormulario";

/**
 * Componente principal de la aplicación.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la aplicación.
 */

function App() {
  return (
    <div className="App">
    <FormProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<FormPage />} />
      </Routes>
    </FormProvider> 
    </div>
  );
}

export default App;
