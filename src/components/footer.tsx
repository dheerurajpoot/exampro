import { FileText } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className='border-t bg-gray-50'>
			<div className='container mx-auto flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6'>
				<div className='flex flex-col gap-2 md:gap-4 md:w-1/3'>
					<Link href='/' className='flex items-center gap-2'>
						<FileText className='h-6 w-6 text-purple-600' />
						<span className='text-xl font-bold'>ExamPro</span>
					</Link>
					<p className='text-sm text-gray-500'>
						Providing quality assessments to help you succeed in
						your career and education.
					</p>
				</div>
				<div className='grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1'>
					<div className='flex flex-col gap-2'>
						<h3 className='font-semibold'>Platform</h3>
						<nav className='flex flex-col gap-2'>
							<Link href='/' className='text-sm hover:underline'>
								Home
							</Link>
							<Link
								href='/about'
								className='text-sm hover:underline'>
								About
							</Link>
							<Link
								href='/contact'
								className='text-sm hover:underline'>
								Contact
							</Link>
						</nav>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='font-semibold'>Legal</h3>
						<nav className='flex flex-col gap-2'>
							<Link
								href='/terms'
								className='text-sm hover:underline'>
								Terms
							</Link>
							<Link
								href='/privacy'
								className='text-sm hover:underline'>
								Privacy
							</Link>
						</nav>
					</div>
					<div className='flex flex-col gap-2'>
						<h3 className='font-semibold'>Assessment</h3>
						<nav className='flex flex-col gap-2'>
							<Link
								href='/exam'
								className='text-sm hover:underline'>
								Take Exam
							</Link>
						</nav>
					</div>
				</div>
			</div>
			<div className='border-t py-6 text-center text-sm text-gray-500'>
				<p>
					© {new Date().getFullYear()} ExamPro. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
