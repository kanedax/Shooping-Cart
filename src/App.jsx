import { Container } from "react-bootstrap"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Shop from "./pages/Shop"
import { CartProvider } from "./context/CartContext"

function App() {
    return (
        <CartProvider>
            <Container>
                <Navbar></Navbar>
                <Routes>
                    <Route index element={<Shop />} />
                </Routes>
            </Container>
        </CartProvider>
    )
}
export default App