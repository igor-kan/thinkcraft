import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, User, Star, Play, FileText } from "lucide-react"
import Link from "next/link"

const readings = [
  {
    id: 1,
    title: "Plato's Republic",
    author: "Plato",
    description: "Explore justice, the ideal state, and the nature of reality through Socratic dialogue.",
    difficulty: "Intermediate",
    estimatedTime: "8 hours",
    chapters: 10,
    progress: 30,
    rating: 4.8,
    topics: ["Justice", "Political Philosophy", "Metaphysics", "Ethics"],
    type: "Classic Text",
  },
  {
    id: 2,
    title: "Meditations on First Philosophy",
    author: "René Descartes",
    description: "Follow Descartes' methodical doubt and his famous cogito ergo sum argument.",
    difficulty: "Advanced",
    estimatedTime: "4 hours",
    chapters: 6,
    progress: 0,
    rating: 4.7,
    topics: ["Epistemology", "Skepticism", "Mind-Body Problem"],
    type: "Classic Text",
  },
  {
    id: 3,
    title: "The Art of Reasoning",
    author: "David Kelley",
    description: "Modern introduction to logical thinking and argumentation techniques.",
    difficulty: "Beginner",
    estimatedTime: "12 hours",
    chapters: 15,
    progress: 60,
    rating: 4.9,
    topics: ["Logic", "Argumentation", "Critical Thinking"],
    type: "Modern Text",
  },
  {
    id: 4,
    title: "Justice: What's the Right Thing to Do?",
    author: "Michael Sandel",
    description: "Contemporary exploration of moral and political philosophy through real-world examples.",
    difficulty: "Beginner",
    estimatedTime: "10 hours",
    chapters: 12,
    progress: 0,
    rating: 4.6,
    topics: ["Ethics", "Political Philosophy", "Applied Ethics"],
    type: "Modern Text",
  },
  {
    id: 5,
    title: "An Enquiry Concerning Human Understanding",
    author: "David Hume",
    description: "Hume's investigation into the nature of human knowledge and understanding.",
    difficulty: "Advanced",
    estimatedTime: "6 hours",
    chapters: 12,
    progress: 0,
    rating: 4.5,
    topics: ["Epistemology", "Empiricism", "Causation", "Induction"],
    type: "Classic Text",
  },
]

const featuredEssays = [
  {
    title: "The Trolley Problem",
    author: "Philippa Foot",
    readTime: "20 min",
    description: "The famous thought experiment that launched a thousand ethics discussions.",
  },
  {
    title: "What Is It Like to Be a Bat?",
    author: "Thomas Nagel",
    readTime: "30 min",
    description: "Exploring consciousness and the hard problem of subjective experience.",
  },
  {
    title: "A Defense of Abortion",
    author: "Judith Jarvis Thomson",
    readTime: "45 min",
    description: "Influential argument using thought experiments about bodily autonomy.",
  },
]

export default function ReadingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Reading Companion</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Guided readings of philosophical texts with annotations, definitions, and discussion questions. Build your
          philosophical library and deepen your understanding.
        </p>
      </div>

      {/* Featured Reading */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="default">Featured This Week</Badge>
            <Badge variant="outline">Classic Text</Badge>
          </div>
          <CardTitle className="text-2xl">Plato's Republic</CardTitle>
          <CardDescription className="text-base">
            Join our guided reading of one of philosophy's most influential works. Explore questions of justice, truth,
            and the ideal society with expert commentary and community discussions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Plato</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 hours</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 rating</span>
              </div>
            </div>
            <Button asChild>
              <Link href="/reading/1">Continue Reading</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Reading List */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">Your Reading List</h2>

          <div className="space-y-4">
            {readings.map((reading) => (
              <Card key={reading.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            reading.difficulty === "Beginner"
                              ? "default"
                              : reading.difficulty === "Intermediate"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {reading.difficulty}
                        </Badge>
                        <Badge variant="outline">{reading.type}</Badge>
                        {reading.progress > 0 && <Badge variant="outline">In Progress</Badge>}
                      </div>
                      <CardTitle className="text-xl mb-1">{reading.title}</CardTitle>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">by {reading.author}</p>
                      <CardDescription>{reading.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{reading.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reading.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Reading Progress</span>
                          <span>{reading.progress}%</span>
                        </div>
                        <Progress value={reading.progress} className="h-2" />
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {reading.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{reading.estimatedTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{reading.chapters} chapters</span>
                        </div>
                      </div>
                      <Button asChild variant={reading.progress > 0 ? "default" : "outline"}>
                        <Link href={`/reading/${reading.id}`}>
                          {reading.progress > 0 ? "Continue" : "Start Reading"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Featured Essays */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Featured Essays</CardTitle>
              <CardDescription>Short philosophical pieces to explore</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {featuredEssays.map((essay, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{essay.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">by {essay.author}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {essay.readTime}
                    </Badge>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{essay.description}</p>
                  <Button size="sm" variant="ghost" className="w-full text-xs">
                    Read Essay
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reading Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reading Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Books Started</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Books Completed</span>
                  <span className="font-medium">1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Hours Read</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Notes Created</span>
                  <span className="font-medium">47</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* External Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">External Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://plato.stanford.edu" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  Stanford Encyclopedia
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://www.gutenberg.org" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Project Gutenberg
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://www.youtube.com/user/YaleCourses" target="_blank" rel="noopener noreferrer">
                  <Play className="h-4 w-4 mr-2" />
                  Yale Open Courses
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
