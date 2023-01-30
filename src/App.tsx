import { Button } from "./Button";

function App() {
	return (
		<div className='container'>
			<div className='button-element'>
				<code>{"<Button />"}</code>
				<Button>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button variant='outline' />"}</code>
				<Button variant='outline'>Outlined</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button variant='text' />"}</code>
				<Button variant='text'>Text</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button disableShadow />"}</code>
				<Button disableShadow>Default</Button>
			</div>
		</div>
	);
}

export default App;
