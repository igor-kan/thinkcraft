"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Brain, Target, Zap, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react"

const fallacies = [
  {
    name: "Ad Hominem",
    definition: "Attacking the person making the argument rather than the argument itself.",
    example: "You can't trust John's opinion on climate change because he's not a scientist.",
    category: "Informal",
  },
  {
    name: "Straw Man",
    definition: "Misrepresenting someone's argument to make it easier to attack.",
    example: "Person A: We should have stricter gun laws. Person B: Why do you want to take away all our guns?",
    category: "Informal",
  },
  {
    name: "Slippery Slope",
    definition: "Arguing that one event will lead to a chain of negative consequences without evidence.",
    example: "If we allow students to redo this test, soon they'll want to redo every assignment.",
    category: "Informal",
  },
  {
    name: "False Dilemma",
    definition: "Presenting only two options when more exist.",
    example: "You're either with us or against us.",
    category: "Informal",
  },
  {
    name: "Appeal to Authority",
    definition: "Using an authority figure's opinion as evidence when they're not an expert in the relevant field.",
    example: "This diet must work because a famous actor endorses it.",
    category: "Informal",
  },
]

const quizQuestions = [
  {
    id: 1,
    question: "What fallacy is present in this argument?",
    argument:
      "We shouldn't listen to Sarah's proposal for the new marketing strategy because she was late to work three times last month.",
    options: ["Ad Hominem", "Straw Man", "False Dilemma", "Appeal to Authority"],
    correct: 0,
    explanation:
      "This is an Ad Hominem fallacy because it attacks Sarah's character (being late) rather than addressing the merits of her marketing proposal.",
  },
  {
    id: 2,
    question: "Identify the fallacy in this statement:",
    argument:
      "If we start allowing people to work from home one day a week, soon everyone will want to work from home all the time, and our office culture will completely collapse.",
    options: ["Slippery Slope", "False Dilemma", "Straw Man", "Appeal to Authority"],
    correct: 0,
    explanation:
      "This is a Slippery Slope fallacy because it assumes that allowing one day of remote work will inevitably lead to complete office culture collapse without providing evidence for this chain of events.",
  },
]

export default function FallacyTrainingPage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [showDefinition, setShowDefinition] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [totalQuestions, setTotalQuestions] = useState(0)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % fallacies.length)
    setShowDefinition(false)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + fallacies.length) % fallacies.length)
    setShowDefinition(false)
  }

  const submitAnswer = () => {
    const isCorrect = Number.parseInt(selectedAnswer) === quizQuestions[quizIndex].correct
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }
    setTotalQuestions((prev) => prev + 1)
    setShowResult(true)
  }

  const nextQuestion = () => {
    setQuizIndex((prev) => (prev + 1) % quizQuestions.length)
    setSelectedAnswer("")
    setShowResult(false)
  }

  const resetQuiz = () => {
    setScore(0)
    setTotalQuestions(0)
    setQuizIndex(0)
    setSelectedAnswer("")
    setShowResult(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Fallacy Training</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Master logical fallacies through flashcards, quizzes, and interactive challenges. Learn to identify and avoid
          common reasoning errors.
        </p>
      </div>

      <Tabs defaultValue="flashcards" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="flashcards" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            Flashcards
          </TabsTrigger>
          <TabsTrigger value="quiz" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Quiz Mode
          </TabsTrigger>
          <TabsTrigger value="challenge" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Challenge
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flashcards" className="mt-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-4 flex justify-between items-center">
              <span className="text-sm text-slate-600 dark:text-slate-400">
                Card {currentCard + 1} of {fallacies.length}
              </span>
              <Badge variant="outline">{fallacies[currentCard].category}</Badge>
            </div>

            <Card className="min-h-[400px] cursor-pointer" onClick={() => setShowDefinition(!showDefinition)}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{fallacies[currentCard].name}</CardTitle>
                <CardDescription>Click to reveal definition and example</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {showDefinition ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Definition:</h4>
                      <p className="text-slate-600 dark:text-slate-400">{fallacies[currentCard].definition}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Example:</h4>
                      <p className="italic text-slate-600 dark:text-slate-400">"{fallacies[currentCard].example}"</p>
                    </div>
                  </div>
                ) : (
                  <div className="py-16">
                    <Brain className="h-16 w-16 mx-auto mb-4 text-slate-400" />
                    <p className="text-slate-500">Click to reveal definition and example</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-between mt-6">
              <Button onClick={prevCard} variant="outline">
                Previous
              </Button>
              <Button onClick={() => setShowDefinition(!showDefinition)} variant="outline">
                {showDefinition ? "Hide" : "Reveal"}
              </Button>
              <Button onClick={nextCard} variant="outline">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="quiz" className="mt-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  Question {quizIndex + 1} of {quizQuestions.length}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm">
                    Score: {score}/{totalQuestions}
                  </span>
                  <Button onClick={resetQuiz} size="sm" variant="outline">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
              <Progress value={((quizIndex + 1) / quizQuestions.length) * 100} />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>{quizQuestions[quizIndex].question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <p className="italic">"{quizQuestions[quizIndex].argument}"</p>
                </div>

                <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                  {quizQuestions[quizIndex].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {showResult && (
                  <Alert
                    className={
                      Number.parseInt(selectedAnswer) === quizQuestions[quizIndex].correct
                        ? "border-green-500"
                        : "border-red-500"
                    }
                  >
                    {Number.parseInt(selectedAnswer) === quizQuestions[quizIndex].correct ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription>
                      {Number.parseInt(selectedAnswer) === quizQuestions[quizIndex].correct
                        ? "Correct! "
                        : "Incorrect. "}
                      {quizQuestions[quizIndex].explanation}
                    </AlertDescription>
                  </Alert>
                )}

                <div className="flex justify-between">
                  {!showResult ? (
                    <Button onClick={submitAnswer} disabled={!selectedAnswer} className="ml-auto">
                      Submit Answer
                    </Button>
                  ) : (
                    <Button onClick={nextQuestion} className="ml-auto">
                      Next Question
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="challenge" className="mt-6">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                <CardTitle className="text-2xl">Debate Duel Challenge</CardTitle>
                <CardDescription>Spot the fallacies in real-time debates and arguments. Coming soon!</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Speed Round</CardTitle>
                      <CardDescription>Identify fallacies as fast as possible</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Debate Analysis</CardTitle>
                      <CardDescription>Analyze real political debates</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Multiplayer Duel</CardTitle>
                      <CardDescription>Compete against other users</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full" disabled>
                        Coming Soon
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
