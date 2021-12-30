import Navbar from './Navbar'
import Product from './Product'

import { ProductProvider } from '../context'
const App = () => {
    return (
        <>
        <ProductProvider>
        <Navbar/>
        <Product/>
        </ProductProvider>
        </>
    )
}

export default App;