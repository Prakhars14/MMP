import React from 'react'
import "./Content.css"
import Table from './Table'
import Dashboard from './Dashboard'
import {useStateValue} from "./StateProvider";

function Content() {
	const [state, dispatch]=useStateValue();
	
	
	return (
		<div className="Content">
			<div >
			{state.role=="rou"? <div>
			<h3 className="id-text">ID Type Routing</h3>
				<Table />
			</div>:<Dashboard />}
				
			</div>
		</div>
	)
}

export default Content