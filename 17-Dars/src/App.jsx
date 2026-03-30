import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/route"
import Layout from "./components/index"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

export default App