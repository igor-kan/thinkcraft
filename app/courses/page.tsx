import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Users, Star, Play, FileText } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Introduction to Philosophy",
    description:
      "Explore fundamental questions about existence, knowledge, and ethics through classic and contemporary perspectives.",
    level: "Beginner",
    duration: "6 weeks",
    lessons: 24,
    students: 1247,
    rating: 4.8,
    progress: 0,
    topics: ["Ancient Philosophy", "Modern Philosophy", "Ethics", "Metaphysics"],
  },
  {
    id: 2,
    title: "Logic and Argumentation",
    description: "Master the principles of valid reasoning, argument construction, and logical analysis.",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 32,
    students: 892,
    rating: 4.9,
    progress: 25,
    topics: ["Propositional Logic", "Predicate Logic", "Argument Forms", "Validity"],
  },
  {
    id: 3,
    title: "Fallacies & Rhetoric",
    description:
      "Identify and avoid logical fallacies while understanding persuasive techniques and rhetorical strategies.",
    level: "Intermediate",
    duration: "5 weeks",
    lessons: 20,
    students: 634,
    rating: 4.7,
    topics: ["Formal Fallacies", "Informal Fallacies", "Rhetoric", "Persuasion"],
  },
  {
    id: 4,
    title: "Political Philosophy",
    description: "Examine theories of justice, authority, and the ideal state from Plato to contemporary thinkers.",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 40,
    students: 456,
    rating: 4.6,
    progress: 0,
    topics: ["Social Contract", "Justice", "Liberty", "Democracy"],
  },
  {
    id: 5,
    title: "Ethics & Moral Reasoning",
    description: "Explore different ethical frameworks and learn to analyze moral dilemmas systematically.",
    level: "Intermediate",
    duration: "7 weeks",
    lessons: 28,
    students: 723,
    rating: 4.8,
    progress: 0,
    topics: ["Consequentialism", "Deontology", "Virtue Ethics", "Applied Ethics"],
  },
  {
    id: 6,
    title: "Epistemology & Metaphysics",
    description: "Delve into questions about knowledge, reality, and the nature of existence.",
    level: "Advanced",
    duration: "12 weeks",
    lessons: 48,
    students: 289,
    rating: 4.9,
    progress: 0,
    topics: ["Knowledge", "Skepticism", "Reality", "Consciousness"],
  },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Learning Tracks</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Follow structured paths through philosophy, logic, and argumentation. Each track combines theory, practice,
          and multimedia resources.
        </p>
      </div>

      <div className="grid gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={
                        course.level === "Beginner"
                          ? "default"
                          : course.level === "Intermediate"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {course.level}
                    </Badge>
                    {course.progress > 0 && <Badge variant="outline">In Progress</Badge>}
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {course.progress > 0 && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/courses/${course.id}`}>{course.progress > 0 ? "Continue" : "Start Course"}</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Play className="h-5 w-5 text-blue-600" />
                <Badge variant="secondary">Video</Badge>
              </div>
              <CardTitle className="text-lg">Yale: Introduction to Political Philosophy</CardTitle>
              <CardDescription>Professor Steven Smith's complete lecture series from Yale University.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Watch on YouTube
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-green-600" />
                <Badge variant="secondary">Reading</Badge>
              </div>
              <CardTitle className="text-lg">Stanford Encyclopedia of Philosophy</CardTitle>
              <CardDescription>Comprehensive academic resource for philosophical topics and arguments.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Visit SEP
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-purple-600" />
                <Badge variant="secondary">Book</Badge>
              </div>
              <CardTitle className="text-lg">The Art of Reasoning</CardTitle>
              <CardDescription>
                David Kelley's comprehensive introduction to logical thinking and argumentation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Read Online
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
