import { Login } from "./components/userForms/login";
import { GlobalProvider } from "./provider/GlobalContext"
import { ToastContainer } from "react-toastify";
import { GlobalStyled } from "./styles/GlobalSyled";
import { RegistereForm } from "./components/userForms/register";


const App = () => {

  return (
    <>
      <GlobalProvider>
      <GlobalStyled/>
        <Login/>
        <RegistereForm/>

      <ToastContainer 
                  position='top-right'
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
                />
      </GlobalProvider>
      
    </>
  )
}

export default App
