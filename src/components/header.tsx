import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<header className='border-b'>
			<div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
				<Link href='/' className='flex items-center gap-2'>
					<FileText className='h-6 w-6 text-purple-600' />
					<span className='text-xl font-bold'>ExamPro</span>
				</Link>
				<nav className='hidden md:flex gap-6'>
					<Link
						href='/'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Home
					</Link>
					<Link
						href='/about'
						className='text-sm font-medium hover:underline underline-offset-4'>
						About
					</Link>
					<Link
						href='/contact'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Contact
					</Link>
					<Link
						href='/terms'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Terms
					</Link>
					<Link
						href='/privacy'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Privacy
					</Link>
				</nav>
				<div className='flex gap-4'>
					<Link href='/instructions'>
						<Button className='bg-purple-600 hover:bg-purple-700'>
							Start Assessment
							<ArrowRight className='ml-2 h-4 w-4' />
						</Button>
					</Link>
					<button className='md:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='h-6 w-6'>
							<line x1='4' x2='20' y1='12' y2='12' />
							<line x1='4' x2='20' y1='6' y2='6' />
							<line x1='4' x2='20' y1='18' y2='18' />
						</svg>
						<span className='sr-only'>Toggle Menu</span>
					</button>
				</div>
			</div>
		</header>
	);
}
