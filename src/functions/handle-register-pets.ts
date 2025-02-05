import { env } from "@/env"
import axios from "axios"

export const handleRegisterPets = async () => {
    await axios.post(`${env.VITE_DATABASE_URL}/`)
}