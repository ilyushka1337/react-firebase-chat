import React from 'react'
import Chat from "./components/Chat";
import Login from "./components/Login";
import { chatRoute, loginRoute } from "./utils/consts";

export const publicRoutes = [
    {
        path: loginRoute,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: chatRoute,
        Component: Chat
    }
]