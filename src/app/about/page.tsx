import Image from "next/image";

export default function AboutPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900'>
									About ExamPro
								</h1>
								<p className='max-w-[700px] text-gray-600 md:text-xl/relaxed'>
									Learn more about our mission to provide
									high-quality assessments for everyone.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4'>
								<div className='space-y-2'>
									<h2 className='text-3xl font-bold tracking-tighter text-purple-900'>
										Our Story
									</h2>
									<p className='text-gray-600 md:text-lg/relaxed'>
										ExamPro was founded in 2020 with a
										simple mission: to make assessments
										accessible, efficient, and effective for
										everyone. We believe that quality
										assessment tools should be available to
										all, regardless of background or
										resources.
									</p>
									<p className='text-gray-600 md:text-lg/relaxed'>
										Our team consists of educators,
										technologists, and assessment experts
										who are passionate about creating tools
										that help people demonstrate their
										knowledge and skills.
									</p>
								</div>
							</div>
							<div className='flex items-center justify-center'>
								<Image
									src='/test.jpg'
									width={600}
									height={400}
									alt='Our Team'
									className='rounded-lg object-cover'
								/>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h2 className='text-3xl font-bold tracking-tighter text-purple-900'>
									Our Values
								</h2>
								<p className='max-w-[700px] text-gray-600 md:text-xl/relaxed'>
									The principles that guide everything we do
									at ExamPro.
								</p>
							</div>
						</div>
						<div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-purple-100 bg-white p-6 shadow-sm'>
								<h3 className='text-xl font-bold text-purple-900'>
									Accessibility
								</h3>
								<p className='text-gray-600'>
									We believe that quality assessment tools
									should be accessible to everyone, regardless
									of background or resources.
								</p>
							</div>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-purple-100 bg-white p-6 shadow-sm'>
								<h3 className='text-xl font-bold text-purple-900'>
									Quality
								</h3>
								<p className='text-gray-600'>
									We are committed to providing high-quality
									assessments that accurately measure
									knowledge and skills.
								</p>
							</div>
							<div className='flex flex-col justify-center space-y-4 rounded-lg border border-purple-100 bg-white p-6 shadow-sm'>
								<h3 className='text-xl font-bold text-purple-900'>
									Innovation
								</h3>
								<p className='text-gray-600'>
									We continuously innovate to improve our
									assessment platform and provide the best
									possible experience for our users.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
