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
				<code>{"<Button color='primary' />"}</code>
				<Button color='primary'>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='primary' variant='outline' />"}</code>
				<Button color='primary' variant='outline'>
					Default
				</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='primary' variant='text' />"}</code>
				<Button color='primary' variant='text'>
					Default
				</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='secondary' />"}</code>
				<Button color='secondary'>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='secondary' variant='outline' />"}</code>
				<Button color='secondary' variant='outline'>
					Default
				</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='secondary' variant='text' />"}</code>
				<Button color='secondary' variant='text'>
					Default
				</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='danger' />"}</code>
				<Button color='danger'>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='danger' variant='outline' />"}</code>
				<Button color='danger' variant='outline'>
					Default
				</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button color='danger' variant='text' />"}</code>
				<Button color='danger' variant='text'>
					Default
				</Button>
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
			<div className='button-element'>
				<code>{"<Button size='sm' />"}</code>
				<Button size='sm'>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button size='md' />"}</code>
				<Button size='md'>Default</Button>
			</div>
			<div className='button-element'>
				<code>{"<Button size='lg' />"}</code>
				<Button size='lg'>Default</Button>
			</div>
		</div>
	);
}

export default App;
