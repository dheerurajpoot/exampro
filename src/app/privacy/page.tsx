export default function PrivacyPage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900'>
									Privacy Policy
								</h1>
								<p className='max-w-[700px] text-gray-600 md:text-xl/relaxed'>
									We value your privacy and are committed to
									protecting your personal information.
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
									1. Information We Collect
								</h2>
								<p className='text-gray-600'>
									We collect information that you provide
									directly to us, such as when you create an
									account, take an assessment, or contact us.
									This may include your name, email address,
									and assessment responses.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									2. How We Use Your Information
								</h2>
								<p className='text-gray-600'>
									We use the information we collect to
									provide, maintain, and improve our services,
									to communicate with you, and to comply with
									legal obligations.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									3. Information Sharing
								</h2>
								<p className='text-gray-600'>
									We do not sell, trade, or otherwise transfer
									your personal information to outside parties
									except as described in this policy. We may
									share your information with trusted third
									parties who assist us in operating our
									platform.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									4. Data Security
								</h2>
								<p className='text-gray-600'>
									We implement a variety of security measures
									to maintain the safety of your personal
									information. However, no method of
									transmission over the Internet or method of
									electronic storage is 100% secure.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									5. Cookies
								</h2>
								<p className='text-gray-600'>
									We use cookies to enhance your experience on
									our platform. You can set your browser to
									refuse all or some browser cookies, but this
									may prevent you from accessing certain
									features of our platform.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									6. Your Rights
								</h2>
								<p className='text-gray-600'>
									Depending on your location, you may have
									certain rights regarding your personal
									information, such as the right to access,
									correct, or delete your data.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									7. Changes to This Policy
								</h2>
								<p className='text-gray-600'>
									We may update this privacy policy from time
									to time. We will notify you of any changes
									by posting the new policy on this page.
								</p>
							</div>
							<div className='space-y-4'>
								<h2 className='text-2xl font-bold text-purple-900'>
									8. Contact Us
								</h2>
								<p className='text-gray-600'>
									If you have any questions about this privacy
									policy, please contact us at
									privacy@exampro.com.
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
