"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// In a real app, you would send the form data to a server here
		console.log(formState);
		setIsSubmitted(true);
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
					<div className='container mx-auto px-4 md:px-6'>
						<div className='flex flex-col items-center justify-center space-y-4 text-center'>
							<div className='space-y-2'>
								<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl text-purple-900'>
									Contact Us
								</h1>
								<p className='max-w-[700px] text-gray-600 md:text-xl/relaxed'>
									Have questions or feedback? We'd love to
									hear from you.
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
										Get in Touch
									</h2>
									<p className='text-gray-600 md:text-lg/relaxed'>
										Fill out the form and we'll get back to
										you as soon as possible.
									</p>
								</div>
								<div className='space-y-4 pt-4'>
									<div className='flex items-start space-x-4'>
										<Mail className='h-6 w-6 text-purple-600 mt-0.5' />
										<div>
											<h3 className='font-bold'>Email</h3>
											<p className='text-gray-600'>
												support@exampro.com
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<Phone className='h-6 w-6 text-purple-600 mt-0.5' />
										<div>
											<h3 className='font-bold'>Phone</h3>
											<p className='text-gray-600'>
												+1 (555) 123-4567
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-4'>
										<MapPin className='h-6 w-6 text-purple-600 mt-0.5' />
										<div>
											<h3 className='font-bold'>
												Address
											</h3>
											<p className='text-gray-600'>
												123 Assessment Street, Suite 100
												<br />
												San Francisco, CA 94103
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='rounded-lg border bg-card p-6 shadow-sm'>
								{isSubmitted ? (
									<div className='flex flex-col items-center justify-center space-y-4 py-12'>
										<div className='flex h-20 w-20 items-center justify-center rounded-full bg-purple-100'>
											<Mail className='h-10 w-10 text-purple-600' />
										</div>
										<div className='space-y-2 text-center'>
											<h3 className='text-2xl font-bold text-purple-900'>
												Message Sent!
											</h3>
											<p className='text-gray-600'>
												Thank you for contacting us.
												We'll get back to you as soon as
												possible.
											</p>
										</div>
									</div>
								) : (
									<form
										onSubmit={handleSubmit}
										className='space-y-4'>
										<div className='space-y-2'>
											<label
												htmlFor='name'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
												Name
											</label>
											<Input
												id='name'
												name='name'
												value={formState.name}
												onChange={handleChange}
												required
												className='border-purple-200 focus:border-purple-500'
											/>
										</div>
										<div className='space-y-2'>
											<label
												htmlFor='email'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
												Email
											</label>
											<Input
												id='email'
												name='email'
												type='email'
												value={formState.email}
												onChange={handleChange}
												required
												className='border-purple-200 focus:border-purple-500'
											/>
										</div>
										<div className='space-y-2'>
											<label
												htmlFor='message'
												className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
												Message
											</label>
											<Textarea
												id='message'
												name='message'
												value={formState.message}
												onChange={handleChange}
												required
												className='min-h-32 border-purple-200 focus:border-purple-500'
											/>
										</div>
										<Button
											type='submit'
											className='w-full bg-purple-600 hover:bg-purple-700'>
											Send Message
										</Button>
									</form>
								)}
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
