import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import { FormPage } from "./pages/FormPage/FormPage";
import { FormProvider } from "./context/ContextoFormulario";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * Componente principal de la aplicación.
 *
 * @component
 * @returns {JSX.Element} Elemento JSX que representa la aplicación.
 */

 const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
    <FormProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<FormPage />} />
      </Routes>
    </FormProvider> 
    </div>
    </QueryClientProvider>
  );
}

export default App;
