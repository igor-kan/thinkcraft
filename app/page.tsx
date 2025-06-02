import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, MessageSquare, Target, Users, Lightbulb, ArrowRight, Play, Star } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Think<span className="text-blue-600">Craft</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light">
            Master the art of thought.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Learn philosophy, logic, and argumentation through structured courses, interactive tools, and engaging
            practice. Transform your thinking with rigorous training in critical reasoning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/courses">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link href="/argument-builder">Try Argument Builder</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          Everything You Need to Think Better
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-blue-600 mb-4" />
              <CardTitle>Structured Learning Tracks</CardTitle>
              <CardDescription>
                Follow curated paths through philosophy, logic, and argumentation with theory and practice.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>Argument Builder</CardTitle>
              <CardDescription>
                Interactive tool to construct logical arguments with AI feedback on strength and clarity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/argument-builder">Build Arguments</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Brain className="h-10 w-10 text-purple-600 mb-4" />
              <CardTitle>Fallacy Training</CardTitle>
              <CardDescription>
                Master logical fallacies through flashcards, quizzes, and interactive challenges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/fallacy-training">Train Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageSquare className="h-10 w-10 text-orange-600 mb-4" />
              <CardTitle>Socratic Forum</CardTitle>
              <CardDescription>
                Engage in structured debates and discussions with fellow learners using Socratic method.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/forum">Join Discussions</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Lightbulb className="h-10 w-10 text-yellow-600 mb-4" />
              <CardTitle>Reading Companion</CardTitle>
              <CardDescription>
                Guided readings of philosophical texts with annotations, definitions, and discussion questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/reading">Start Reading</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-red-600 mb-4" />
              <CardTitle>Learning Dashboard</CardTitle>
              <CardDescription>
                Track your progress, argument scores, and build a shareable learning profile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/dashboard">View Progress</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Content */}
      <section className="container mx-auto px-4 py-16 bg-white/50 dark:bg-slate-800/50 rounded-lg mx-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">Featured This Week</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Play className="h-5 w-5 text-blue-600" />
                <Badge variant="secondary">Video Lecture</Badge>
              </div>
              <CardTitle className="text-lg">The Art of Socratic Questioning</CardTitle>
              <CardDescription>
                Learn how to ask better questions and guide discussions using the Socratic method.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 rating • 45 min</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                <Badge variant="secondary">Debate of the Week</Badge>
              </div>
              <CardTitle className="text-lg">Is Free Will Compatible with Determinism?</CardTitle>
              <CardDescription>Join the ongoing discussion about compatibilism vs. hard determinism.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Users className="h-4 w-4" />
                <span>127 participants • 3 days left</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Ready to Transform Your Thinking?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Join thousands of learners who are mastering the art of thought through structured practice and rigorous
            training.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/courses">
              Begin Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
