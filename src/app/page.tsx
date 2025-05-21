import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, FileText, Users } from "lucide-react";

export default function HomePage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-50 to-white'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-purple-900'>
										Assess Your Knowledge with Confidence
									</h1>
									<p className='max-w-[600px] text-gray-600 md:text-xl'>
										Take your skills to the next level with
										our comprehensive assessment platform.
										Simple, effective, and designed for your
										success.
									</p>
								</div>
								<div className='flex flex-col gap-2 min-[400px]:flex-row'>
									<Link href='/instructions'>
										<Button className='bg-purple-600 hover:bg-purple-700'>
											Start Assessment
											<ArrowRight className='ml-2 h-4 w-4' />
										</Button>
									</Link>
									<Link href='/about'>
										<Button variant='outline'>
											Learn More
										</Button>
									</Link>
								</div>
							</div>
							<div className='flex items-center justify-center'>
								<Image
									src='/test.jpg'
									width={550}
									height={550}
									alt='Assessment Platform'
									className='rounded-lg object-cover'
								/>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<div className='inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700'>
									Features
								</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900'>
									Why Choose Our Assessment Platform
								</h2>
								<p className='max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
									Our platform is designed to provide a
									seamless assessment experience with features
									that make testing efficient and effective.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-purple-100 p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
									<Clock className='h-6 w-6 text-purple-600' />
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold text-purple-900'>
										Timed Assessments
									</h3>
									<p className='text-gray-600'>
										Take assessments with customized time
										limits to simulate real exam conditions.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-purple-100 p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
									<CheckCircle className='h-6 w-6 text-purple-600' />
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold text-purple-900'>
										Instant Feedback
									</h3>
									<p className='text-gray-600'>
										Receive immediate results and detailed
										feedback on your performance.
									</p>
								</div>
							</div>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-purple-100 p-6 shadow-sm'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100'>
									<Users className='h-6 w-6 text-purple-600' />
								</div>
								<div className='space-y-2'>
									<h3 className='text-xl font-bold text-purple-900'>
										User-Friendly
									</h3>
									<p className='text-gray-600'>
										Intuitive interface designed for all
										users, regardless of technical
										expertise.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-10 px-10 md:gap-16 lg:grid-cols-2'>
							<div className='space-y-4'>
								<div className='inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700'>
									Get Started
								</div>
								<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900'>
									Ready to test your knowledge?
								</h2>
								<p className='max-w-[600px] text-gray-600 md:text-xl/relaxed'>
									Our assessment platform is designed to help
									you evaluate your skills and knowledge in a
									structured and efficient manner.
								</p>
								<Link href='/instructions'>
									<Button className='bg-purple-600 hover:bg-purple-700'>
										Start Assessment
										<ArrowRight className='ml-2 h-4 w-4' />
									</Button>
								</Link>
							</div>
							<div className='flex flex-col items-start space-y-4'>
								<div className='inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-700'>
									Testimonials
								</div>
								<blockquote className='border-l-4 border-purple-600 pl-4 italic text-gray-600'>
									"This assessment platform helped me prepare
									for my certification exam. The interface is
									intuitive and the questions are
									well-designed."
								</blockquote>
								<p className='font-semibold'>
									- Sarah Johnson, Software Developer
								</p>
								<blockquote className='border-l-4 border-purple-600 pl-4 italic text-gray-600'>
									"I love how easy it is to navigate through
									the questions. The instant feedback feature
									is incredibly helpful."
								</blockquote>
								<p className='font-semibold'>
									- Michael Chen, Data Analyst
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
