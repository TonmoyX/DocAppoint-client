import { jwtClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://docappoint-snowy.vercel.app", 
    plugins:[
        jwtClient()
    ]
    // baseURL: "http://localhost:3000/"
})

export const { signIn, signUp, useSession } = createAuthClient()