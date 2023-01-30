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
			<div className='button-element'>
				<code>{"<Button disabled />"}</code>
				<Button disabled>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button variant='text' disabled />"}</code>
				<Button variant='text' disabled>
					Default
				</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button startIcon='commit' />"}</code>
				<Button startIcon='commit'>Default</Button>
				<a
					href='https://fonts.google.com/icons?icon.platform=web'
					target='_blank'
					rel='noopener noreferral'>
					Full list of icons
				</a>
			</div>
			<div className='button-element'>
				<code>{"<Button endIcon='send' />"}</code>
				<Button endIcon='send'>Default</Button>
				<a
					href='https://fonts.google.com/icons?icon.platform=web'
					target='_blank'
					rel='noopener noreferral'>
					Full list of icons
				</a>
			</div>
		</div>
	);
}

export default App;
