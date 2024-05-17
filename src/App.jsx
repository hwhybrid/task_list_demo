import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	// First track the collection of tasks 
	const [tasks, setTasks] = useState([])
	// ALso track the input values and you an modify them with the setter method here:
	const [inputValue, setInputValue] = useState("")

	const addTask = () => {

		//Add conditional logic to check and make sure the input is not just empty spaces....
		if (inputValue.trim() !== ""){

		// Implement the method to update the tasks list:
		setTasks([
			// Using the spread operator to save hassle of 
			// typing the full list of tasks and then you
			// can simply add the new task as a new object element!
			...tasks, 
			{id: tasks.length +1,
			text: inputValue
			}
		])
		setInputValue("") //Clear the input value after adding a task.\
	}
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter(task => task.id !== id));
	};
  
  return (
    <>
	<div className='container mt-5'>
	<div className="taskTracker bg-light p-4 border rounded shadow">
		
		<h1 className='mb-3 text-center text-primary'>This is my task tracker</h1>
			<input 
				type='text'
				className='form-control mb-2'
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
				onKeyUp={(event) => {
					if (event.key === "Enter") 
					addTask()
					}}
				placeholder="Add a new task"		
			/>
			<button className='btn btn-primary mb-3 btn-success' onClick={addTask}>Add task!</button>
		
			<ul className='list-group'>
				{tasks.map((task) => (
					<li 
						className='list-group-item d-flex justify-content-between align-items-center'
						key={task.id}>
						{task.text}
						<button className='btn btn-danger' onClick={() => deleteTask(task.id)}>DELETE</button>
					</li>
))}
			</ul>
		</div>
	</div>
    </>
	)
}

export default App
