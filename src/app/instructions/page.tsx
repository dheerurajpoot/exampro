"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	AlertTriangle,
	Camera,
	Mic,
	MonitorSmartphone,
	ScreenShare,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function InstructionsPage() {
	const router = useRouter();
	const [agreed, setAgreed] = useState(false);

	const handleProceed = () => {
		if (agreed) {
			router.push("/exam");
		}
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<main className='flex-1 container mx-auto py-8 px-4 md:px-6'>
				<div className='max-w-4xl mx-auto space-y-8'>
					<div className='text-center space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900'>
							Assessment Instructions
						</h1>
						<p className='text-gray-600 md:text-xl/relaxed'>
							Please read the following instructions carefully
							before proceeding
						</p>
					</div>

					<Alert className='bg-amber-50 border-amber-200'>
						<AlertTriangle className='h-5 w-5 text-amber-600' />
						<AlertTitle className='text-amber-800 font-bold'>
							Important Notice
						</AlertTitle>
						<AlertDescription className='text-amber-700'>
							This assessment is monitored. Any violation of the
							rules may result in disqualification.
						</AlertDescription>
					</Alert>

					<div className='space-y-6 bg-white p-6 rounded-lg border shadow-sm'>
						<h2 className='text-2xl font-bold text-purple-900'>
							Monitoring Information
						</h2>

						<div className='grid gap-6 md:grid-cols-2'>
							<div className='flex items-start gap-3'>
								<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100'>
									<Camera className='h-5 w-5 text-purple-600' />
								</div>
								<div>
									<h3 className='font-semibold'>
										Camera Monitoring
									</h3>
									<p className='text-sm text-gray-600'>
										Your webcam will be active during the
										assessment to verify your identity and
										prevent cheating.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-3'>
								<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100'>
									<Mic className='h-5 w-5 text-purple-600' />
								</div>
								<div>
									<h3 className='font-semibold'>
										Microphone Access
									</h3>
									<p className='text-sm text-gray-600'>
										Your microphone will be active to ensure
										you are not receiving external
										assistance.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-3'>
								<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100'>
									<ScreenShare className='h-5 w-5 text-purple-600' />
								</div>
								<div>
									<h3 className='font-semibold'>
										Screen Monitoring
									</h3>
									<p className='text-sm text-gray-600'>
										Your screen activity will be monitored
										to prevent unauthorized resource usage.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-3'>
								<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100'>
									<MonitorSmartphone className='h-5 w-5 text-purple-600' />
								</div>
								<div>
									<h3 className='font-semibold'>
										Browser Activity
									</h3>
									<p className='text-sm text-gray-600'>
										Tab switching and browser navigation
										will be detected and logged.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='space-y-6 bg-white p-6 rounded-lg border shadow-sm'>
						<h2 className='text-2xl font-bold text-purple-900'>
							Assessment Rules
						</h2>

						<ul className='space-y-4'>
							<li className='flex items-start gap-3'>
								<AlertTriangle className='h-5 w-5 text-red-500 mt-0.5 flex-shrink-0' />
								<p>
									<span className='font-semibold'>
										Do not switch tabs or applications.
									</span>{" "}
									Switching away from the assessment window
									may result in automatic disqualification.
								</p>
							</li>

							<li className='flex items-start gap-3'>
								<AlertTriangle className='h-5 w-5 text-red-500 mt-0.5 flex-shrink-0' />
								<p>
									<span className='font-semibold'>
										Do not use multiple devices.
									</span>{" "}
									Using phones, tablets, or additional
									computers during the assessment is
									prohibited.
								</p>
							</li>

							<li className='flex items-start gap-3'>
								<AlertTriangle className='h-5 w-5 text-red-500 mt-0.5 flex-shrink-0' />
								<p>
									<span className='font-semibold'>
										Do not open multiple tabs.
									</span>{" "}
									Having multiple tabs open in your browser is
									not allowed during the assessment.
								</p>
							</li>

							<li className='flex items-start gap-3'>
								<AlertTriangle className='h-5 w-5 text-red-500 mt-0.5 flex-shrink-0' />
								<p>
									<span className='font-semibold'>
										No external assistance.
									</span>{" "}
									Communicating with others or using
									unauthorized resources is strictly
									prohibited.
								</p>
							</li>

							<li className='flex items-start gap-3'>
								<AlertTriangle className='h-5 w-5 text-red-500 mt-0.5 flex-shrink-0' />
								<p>
									<span className='font-semibold'>
										Complete in one session.
									</span>{" "}
									The assessment must be completed in one
									sitting without breaks.
								</p>
							</li>
						</ul>
					</div>

					<div className='space-y-6 bg-white p-6 rounded-lg border shadow-sm'>
						<h2 className='text-2xl font-bold text-purple-900'>
							General Instructions
						</h2>

						<ul className='space-y-2 list-disc pl-5 text-gray-600'>
							<li>
								The assessment consists of multiple-choice
								questions.
							</li>
							<li>
								You will have a limited time to complete the
								assessment.
							</li>
							<li>
								Answer all questions to the best of your
								ability.
							</li>
							<li>
								Ensure you have a stable internet connection
								before starting.
							</li>
							<li>
								Make sure your device is fully charged or
								connected to a power source.
							</li>
							<li>
								Ensure your webcam and microphone are working
								properly.
							</li>
							<li>
								Find a quiet, well-lit environment to take the
								assessment.
							</li>
						</ul>
					</div>

					<div className='flex items-start space-x-2 pt-4'>
						<Checkbox
							id='terms'
							checked={agreed}
							onCheckedChange={(checked) =>
								setAgreed(checked as boolean)
							}
							className='data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600'
						/>
						<div className='grid gap-1.5 leading-none'>
							<Label
								htmlFor='terms'
								className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
								I have read and agree to the assessment rules
								and monitoring conditions
							</Label>
						</div>
					</div>

					<div className='flex justify-between pt-4'>
						<Link href='/'>
							<Button variant='outline'>Return to Home</Button>
						</Link>
						<Button
							onClick={handleProceed}
							disabled={!agreed}
							className='bg-purple-600 hover:bg-purple-700 disabled:opacity-50'>
							Proceed to Assessment
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
