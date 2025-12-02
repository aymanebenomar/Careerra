import React from 'react'
import { Outlet } from 'react-router-dom'
import Usernavbar from '../components/Usernavbar'

const Layout = () => {
  return (
	<div>
		<h1>Layout page</h1>
		<div>
			<Usernavbar />
			<Outlet />
		</div>
	</div>
  )
}

export default Layout