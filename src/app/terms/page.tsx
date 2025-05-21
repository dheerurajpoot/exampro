export default function TermsPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900'>
									Terms of Service
								</h1>
								<p className='max-w-[700px] text-gray-600 md:text-xl/relaxed'>
									Please read these terms carefully before
									using our platform.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='mx-auto max-w-3xl space-y-8'>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									1. Acceptance of Terms
								</h2>
								<p className='text-gray-600'>
									By accessing or using the ExamPro platform,
									you agree to be bound by these Terms of
									Service. If you do not agree to these terms,
									please do not use our platform.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									2. Description of Service
								</h2>
								<p className='text-gray-600'>
									ExamPro provides an online assessment
									platform that allows users to take exams and
									assessments. We reserve the right to modify,
									suspend, or discontinue the service at any
									time without notice.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									3. User Accounts
								</h2>
								<p className='text-gray-600'>
									Some features of our platform may require
									you to create an account. You are
									responsible for maintaining the
									confidentiality of your account information
									and for all activities that occur under your
									account.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									4. User Conduct
								</h2>
								<p className='text-gray-600'>
									You agree not to use the platform for any
									unlawful purpose or in any way that could
									damage, disable, or impair the platform. You
									also agree not to attempt to gain
									unauthorized access to any part of the
									platform.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									5. Intellectual Property
								</h2>
								<p className='text-gray-600'>
									All content on the ExamPro platform,
									including but not limited to text, graphics,
									logos, and software, is the property of
									ExamPro and is protected by copyright and
									other intellectual property laws.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									6. Limitation of Liability
								</h2>
								<p className='text-gray-600'>
									ExamPro shall not be liable for any
									indirect, incidental, special,
									consequential, or punitive damages resulting
									from your use of or inability to use the
									platform.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									7. Changes to Terms
								</h2>
								<p className='text-gray-600'>
									We reserve the right to modify these Terms
									of Service at any time. We will provide
									notice of significant changes by posting the
									new terms on the platform.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									8. Contact Information
								</h2>
								<p className='text-gray-600'>
									If you have any questions about these Terms
									of Service, please contact us at
									support@exampro.com.
								</p>
							</div>
							<div className='pt-4'>
								<p className='text-sm text-gray-500'>
									Last updated: May 21, 2023
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
