'use client';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Form, FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Page() {
	return (
		<main>
			<Card className='lg:w-1/4 w-80 m-auto lg:mt-14 mt-10'>
				<CardHeader>
					<CardTitle className='text-center'>
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
				<CardFooter className='flex flex-col gap-1.5'>
					<p className='text-xs'>
						Forgot your Password? RESET PASSWORD
					</p>
					<Button className='w-full'>sign in</Button>
					<Button
						className='w-full'
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
