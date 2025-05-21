"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Sample exam questions
const examQuestions = [
	{
		id: 1,
		question: "What is the result of typeof typeof null in JavaScript?",
		options: ["object", "null", "undefined", "string"],
		correctAnswer: "string",
	},
	{
		id: 2,
		question:
			"Which of the following headers best protects against reflected XSS?",
		options: [
			"X-Frame-Options",
			"Content-Security-Policy",
			"X-Content-Type-Options",
			"Strict-Transport-Security",
		],
		correctAnswer: "Content-Security-Policy",
	},
	{
		id: 3,
		question: "What will this return: [].__proto__ === Array.prototype?",
		options: ["true", "false", "undefined", "TypeError"],
		correctAnswer: "true",
	},
	{
		id: 4,
		question:
			"In Big O notation, what is the time complexity of binary search?",
		options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
		correctAnswer: "O(log n)",
	},
	{
		id: 5,
		question:
			"Which sorting algorithm has the best average-case performance?",
		options: [
			"Bubble Sort",
			"Merge Sort",
			"Insertion Sort",
			"Selection Sort",
		],
		correctAnswer: "Merge Sort",
	},
	{
		id: 6,
		question: "What will the following evaluate to: 0.1 + 0.2 === 0.3?",
		options: ["true", "false", "NaN", "undefined"],
		correctAnswer: "false",
	},
	{
		id: 7,
		question:
			"Which data structure is used for implementing browser history?",
		options: ["Queue", "Stack", "Linked List", "Graph"],
		correctAnswer: "Stack",
	},
	{
		id: 8,
		question: "What does the HTTP status code 418 represent?",
		options: [
			"Proxy Auth Required",
			"I'm a teapot",
			"Payment Required",
			"Not Implemented",
		],
		correctAnswer: "I'm a teapot",
	},
	{
		id: 9,
		question: "What does NaN === NaN evaluate to in JavaScript?",
		options: ["true", "false", "undefined", "TypeError"],
		correctAnswer: "false",
	},
	{
		id: 10,
		question: "In CSS, what does `initial` do?",
		options: [
			"Resets to browser default",
			"Inherits value from parent",
			"Sets to initial defined value in stylesheet",
			"Sets value to empty string",
		],
		correctAnswer: "Resets to browser default",
	},
	{
		id: 11,
		question:
			"What is the time complexity of inserting at the end of a JavaScript array?",
		options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
		correctAnswer: "O(1)",
	},
	{
		id: 12,
		question: "Which algorithm is used in HTTPS for asymmetric encryption?",
		options: ["AES", "RSA", "SHA-256", "MD5"],
		correctAnswer: "RSA",
	},
	{
		id: 13,
		question:
			"Which JavaScript method can convert an object into a JSON string?",
		options: [
			"JSON.parse()",
			"JSON.stringify()",
			"toString()",
			"parseInt()",
		],
		correctAnswer: "JSON.stringify()",
	},
	{
		id: 14,
		question: "Which of the following is a side-effect-free function?",
		options: ["console.log()", "fetch()", "Math.max()", "document.write()"],
		correctAnswer: "Math.max()",
	},
	{
		id: 15,
		question: "How many combinations are there for 4 binary digits?",
		options: ["4", "8", "16", "32"],
		correctAnswer: "16",
	},
	{
		id: 16,
		question:
			"Which layout system in CSS allows you to design a grid-based layout?",
		options: ["Flexbox", "Float", "Grid", "Block"],
		correctAnswer: "Grid",
	},
	{
		id: 17,
		question: "In React, what is the purpose of `useMemo()`?",
		options: [
			"Store state",
			"Memoize computed values",
			"Optimize DOM updates",
			"Call APIs",
		],
		correctAnswer: "Memoize computed values",
	},
	{
		id: 18,
		question: "What does the `defer` attribute do in a script tag?",
		options: [
			"Loads script after HTML parsing completes",
			"Executes script immediately",
			"Delays script by 1 second",
			"Disables script caching",
		],
		correctAnswer: "Loads script after HTML parsing completes",
	},
	{
		id: 19,
		question: "What is the entropy (in bits) of a 6-digit numeric OTP?",
		options: ["10 bits", "20 bits", "12 bits", "Approx. 19.93 bits"],
		correctAnswer: "Approx. 19.93 bits",
	},
	{
		id: 20,
		question:
			"Which function in JavaScript is used to schedule a function after a delay?",
		options: [
			"setInterval()",
			"setTimeout()",
			"setImmediate()",
			"schedule()",
		],
		correctAnswer: "setTimeout()",
	},
	{
		id: 21,
		question: "What will be the output of `3 + '3' - 3`?",
		options: ["3", "33", "30", "NaN"],
		correctAnswer: "30",
	},
	{
		id: 22,
		question: "Which sorting algorithm is considered stable?",
		options: ["Quick Sort", "Heap Sort", "Bubble Sort", "Selection Sort"],
		correctAnswer: "Bubble Sort",
	},
	{
		id: 23,
		question: "What does CSP stand for in web security?",
		options: [
			"Content Security Protocol",
			"Cross-Site Policy",
			"Content Security Policy",
			"Control Security Policy",
		],
		correctAnswer: "Content Security Policy",
	},
	{
		id: 24,
		question:
			"Which function is used to deeply clone an object in JavaScript?",
		options: [
			"Object.assign()",
			"JSON.parse(JSON.stringify())",
			"clone()",
			"Object.clone()",
		],
		correctAnswer: "JSON.parse(JSON.stringify())",
	},
	{
		id: 25,
		question: "What does `async` keyword do to a JavaScript function?",
		options: [
			"Makes it non-blocking",
			"Returns a promise",
			"Makes it synchronous",
			"Throws error if await is missing",
		],
		correctAnswer: "Returns a promise",
	},
	{
		id: 26,
		question:
			"If a website has `robots.txt` disallowing all crawling, what does it prevent?",
		options: [
			"Website access",
			"Search engine indexing",
			"DNS resolution",
			"SSL certificate usage",
		],
		correctAnswer: "Search engine indexing",
	},
	{
		id: 27,
		question: "What is the base-2 logarithm of 1024?",
		options: ["10", "8", "512", "102"],
		correctAnswer: "10",
	},
	{
		id: 28,
		question: "Which method checks if all elements in array pass the test?",
		options: ["map()", "filter()", "some()", "every()"],
		correctAnswer: "every()",
	},
	{
		id: 29,
		question: "What is the result of `[1, 2, 3] + [4, 5]` in JavaScript?",
		options: ["[1,2,3,4,5]", "NaN", "1,2,34,5", "1,2,34,5 as string"],
		correctAnswer: "1,2,34,5 as string",
	},
	{
		id: 30,
		question:
			"In HTML, which tag is used to embed a document within another?",
		options: ["<object>", "<embed>", "<iframe>", "<include>"],
		correctAnswer: "<iframe>",
	},
];

export default function ExamPage() {
	const router = useRouter();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState<string[]>(
		Array(examQuestions.length).fill("")
	);
	const [timeLeft, setTimeLeft] = useState(1800);

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft((prevTime) => prevTime - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	// Handle answer selection
	const handleAnswerSelect = (value: string) => {
		const newAnswers = [...answers];
		newAnswers[currentQuestion] = value;
		setAnswers(newAnswers);
	};

	// Handle next question
	const handleNextQuestion = () => {
		if (currentQuestion < examQuestions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	// Handle previous question
	const handlePreviousQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	// Handle exam submission
	const handleSubmit = () => {
		// In a real app, you would send the answers to a server here
		router.push("/thank-you");
	};

	// Format time left
	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${
			remainingSeconds < 10 ? "0" : ""
		}${remainingSeconds}`;
	};

	return (
		<div className='flex flex-col min-h-screen bg-purple-50'>
			<main className='flex-1 container mx-auto py-8 px-4 md:px-6'>
				<Card className='max-w-4xl mx-auto'>
					<CardHeader>
						<CardTitle className='text-xl text-purple-900'>
							Question {currentQuestion + 1}
							<span className='text-sm text-gray-500 ml-2'>
								({currentQuestion + 1}/{examQuestions.length})
							</span>
						</CardTitle>
						<CardDescription>
							Select the best answer for the question below
						</CardDescription>
						<CardDescription>
							Time left: {formatTime(timeLeft)}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-6'>
							<h3 className='text-lg font-medium'>
								{examQuestions[currentQuestion].question}
							</h3>
							<RadioGroup
								value={answers[currentQuestion]}
								onValueChange={handleAnswerSelect}>
								{examQuestions[currentQuestion].options.map(
									(option, index) => (
										<div
											key={index}
											className='flex items-center space-x-2 border p-3 rounded-md hover:bg-purple-50 transition-colors'>
											<RadioGroupItem
												value={option}
												id={`option-${index}`}
											/>
											<Label
												htmlFor={`option-${index}`}
												className='flex-1 cursor-pointer'>
												{option}
											</Label>
										</div>
									)
								)}
							</RadioGroup>
						</div>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<Button
							variant='outline'
							onClick={handlePreviousQuestion}
							disabled={currentQuestion === 0}>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Previous
						</Button>
						<div className='flex gap-2'>
							{currentQuestion === examQuestions.length - 1 ? (
								<Button
									className='bg-purple-600 hover:bg-purple-700'
									onClick={handleSubmit}>
									Submit Exam
								</Button>
							) : (
								<Button
									className='bg-purple-600 hover:bg-purple-700'
									onClick={handleNextQuestion}>
									Next
									<ArrowRight className='ml-2 h-4 w-4' />
								</Button>
							)}
						</div>
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}
