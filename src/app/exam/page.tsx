"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
import { ArrowLeft, ArrowRight, Clock, FileText } from "lucide-react";

// Sample exam questions
const examQuestions = [
	{
		id: 1,
		question: "What is the capital of France?",
		options: ["London", "Berlin", "Paris", "Madrid"],
		correctAnswer: "Paris",
	},
	{
		id: 2,
		question: "Which planet is known as the Red Planet?",
		options: ["Earth", "Mars", "Jupiter", "Venus"],
		correctAnswer: "Mars",
	},
	{
		id: 3,
		question: "What is the largest mammal in the world?",
		options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
		correctAnswer: "Blue Whale",
	},
	{
		id: 4,
		question: "Which element has the chemical symbol 'O'?",
		options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
		correctAnswer: "Oxygen",
	},
	{
		id: 5,
		question: "Who painted the Mona Lisa?",
		options: [
			"Vincent van Gogh",
			"Pablo Picasso",
			"Leonardo da Vinci",
			"Michelangelo",
		],
		correctAnswer: "Leonardo da Vinci",
	},
];

export default function ExamPage() {
	const router = useRouter();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState<string[]>(
		Array(examQuestions.length).fill("")
	);
	const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

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
						</CardTitle>
						<CardDescription>
							Select the best answer for the question below
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
