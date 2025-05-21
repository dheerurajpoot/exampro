import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1 flex items-center justify-center bg-purple-50'>
				<div className='container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='flex h-20 w-20 items-center justify-center rounded-full bg-purple-100'>
							<CheckCircle className='h-10 w-10 text-purple-600' />
						</div>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900'>
								Thank You for Completing the Assessment!
							</h1>
							<p className='text-gray-600 md:text-xl/relaxed'>
								Your responses have been recorded successfully.
								We will share your results on your email with in
								5 working days.
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
