import React from 'react'
import { Outlet } from 'react-router-dom'
import Usernavbar from '../components/Usernavbar'

const Layout = () => {
  return (
	<div>
		<div>
			<Usernavbar />
			<Outlet />
		</div>
	</div>
  )
}

export default Layout