import { createRoot } from 'react-dom/client'
import StarWarsApp from "./starWarsApp"
import { StrictMode } from 'react'
import './style.css'

createRoot(document.getElementById("app")).render(
    <StrictMode>
        <StarWarsApp/>
    </StrictMode>
)
