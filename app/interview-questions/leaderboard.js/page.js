


// import React, {useState, useEffect} from 'react';
// import { response } from '../response';

// const index = 0;

// function sortData(data, sortKey){
// 	console.log("here")

// 	let sortedData;

// 	if (sortKey === 'rank' || sortKey === 'points' || sortKey === 'age') {
// 		sortedData = data?.sort((a,b) => {
// 			return Number(a[sortKey]) < Number(b[sortKey]) ? -1 : 1;
// 		})
// 	} else {
// 		sortedData = data?.sort((a,b) => {
// 			return a[sortKey] < b[sortKey] ? -1 : 1;
// 		})
// 	}


// 	// console.log(sortedData)
// 	return sortedData
// }

// //TODO: refactor redirect functions to be reusable
// //TODO: change url without triggering a reload
// function redirectRank(e){
// 	console.log(window.location.pathname)
// 	window.location.href = '/rank'
// }

// function redirectName(e){
// 	// console.log(e.currentTarget.sortKey)
// 	window.location.href = '/name'
// }

// function redirectPoints(e){
// 	// console.log(e.currentTarget.sortKey)
// 	window.location.href = '/points'
// }

// function redirectAge(e){
// 	// console.log(e.currentTarget.sortKey)
// 	window.location.href = '/age'
// }

// function LeaderBoard(props) {
// 	const { rank, name, points, age} = response.list[index];
// 	const [users, setUser] = useState(response.list)
// 	const [sortKey, setSortKey] = useState('rank')
// 	const [sortedData, setSortedData] = useState([])

// 	// console.log("********")
// 	// console.log(response)
// 	// console.log(window.location)

// 	useEffect(()=>{
// 		// console.log("********")
// 		// console.log(window.location.pathname.split('/')[1])

// 		// console.log("********")
// 		// console.log(window.history)

// 		setSortKey(window.location.pathname.split('/')[1])
// 	},[])

// 	useEffect(()=>{
// 		console.log("********")
// 		// setSortedData(sortData(users, sortKey))

// 		console.log(sortData(users, sortKey))
// 		setSortedData(sortData(users, sortKey))

// 		// setSortedData(sortData({data:users, sortkey:sortKey}))
// 	},[sortKey])

// 	return (
// 		<div className="text-center mt-50">
// 			<div>
// 				<div>
// 					<button data-testid="route-rank" className='outlined' type="button" sortKey="rank" onClick={e => redirectRank(e)}>Rank</button>
// 					<button data-testid="route-name" className='outlined' type="button" sortKey="name" onClick={e => redirectName(e)}>Name</button>
// 					<button data-testid="route-points" className='outlined' type="button" sortKey="points" onClick={e => redirectPoints(e)}>Points</button>
// 					<button data-testid="route-age" className='outlined' type="button" sortKey="age" onClick={e => redirectAge(e)}>Age</button>
// 				</div>
// 			</div>
// 			<div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
// 				<table className="mt-50" data-testid="app-table">
// 					<thead>
// 						<tr>
// 							<th>Rank</th>
// 							<th>Name</th>
// 							<th className="numeric">Points</th>
// 							<th className="numeric">Age</th>
// 						</tr>
// 					</thead>
// 					<tbody data-testid="app-tbody">
// 						{/* <tr key={rank}>
// 							<td data-testid={`rank-${index}`}>{rank}</td>
// 							<td data-testid={`name-${index}`}>{name}</td>
// 							<td data-testid={`points-${index}`} className="numeric">{points}</td>
// 							<td data-testid={`age-${index}`} className="numeric">{age}</td>
// 						</tr> */}
// 						{console.log("sortedData")}
// 						{console.log(sortedData)}
// 						{sortedData.map((user, index) => {
// 							return(
// 								<tr key={user.rank}>
// 								<td data-testid={`rank-${index}`}>{user.rank}</td>
// 								<td data-testid={`name-${index}`}>{user.name}</td>
// 								<td data-testid={`points-${index}`} className="numeric">{user.points}</td>
// 								<td data-testid={`age-${index}`} className="numeric">{user.age}</td>
// 								</tr>
// 							)
// 						})}
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	);
// }

// export default LeaderBoard;
