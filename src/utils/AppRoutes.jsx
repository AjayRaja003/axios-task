import React from 'react'

import { Navigate } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Create from '../Components/Create'
import Edit from '../Components/Edit'

const AppRoutes = [
    {
        path : '/',
        element : <Dashboard/>,
        exact : true,
    },
    {
        path : '/create',
        element : <Create/>,
        exact : true,
    },
    {
        path : '/edit/:id',
        element : <Edit/>,
        exact : true,
    },
    {
        path : '*',
        element : <Navigate to='/'/>,
        exact : false,
    }
]

export default AppRoutes