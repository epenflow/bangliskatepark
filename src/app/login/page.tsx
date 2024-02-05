import GoBack from '@/components/Login/GoBack';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export default function Page() {
	return (
		<main>
			<Card
				className={cn(
					`lg:w-1/4 w-80 m-auto lg:mt-14 mt-10 bg-white border border-solid border-[#C8C8C8]`
				)}>
				<CardHeader>
					<GoBack />
					<CardTitle className='text-center font-mono'>
						LOGIN BUPATI CUP
						<br /> SKATEBOARD COMPETITION II
					</CardTitle>
				</CardHeader>
				<CardContent className='capitalize'>
					<div>
						<Label>email</Label>
						<Input />
					</div>
					<div>
						<Label>password</Label>
						<Input />
					</div>
				</CardContent>
				<CardFooter className='flex flex-col gap-1.5 '>
					<p className='text-xs'>
						Forgot your Password? RESET PASSWORD
					</p>
					<Button className='w-full uppercase'>sign in</Button>
					<Button
						className='w-full uppercase'
						variant={'outline'}>
						sign up
					</Button>
					<p className='text-xs'>
						Don't have an account yet? Create Now!
					</p>
				</CardFooter>
			</Card>
		</main>
	);
}
