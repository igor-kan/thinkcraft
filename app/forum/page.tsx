import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Clock, TrendingUp, Pin } from "lucide-react"
import Link from "next/link"

const discussions = [
  {
    id: 1,
    title: "Is Free Will Compatible with Determinism?",
    description:
      "Exploring the philosophical debate between compatibilism and hard determinism. What are your thoughts on whether we can have free will in a deterministic universe?",
    author: "PhilosophyStudent",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Metaphysics",
    replies: 47,
    likes: 23,
    lastActivity: "2 hours ago",
    isPinned: true,
    isHot: true,
  },
  {
    id: 2,
    title: "The Trolley Problem: Utilitarian vs Deontological Ethics",
    description:
      "Let's discuss different ethical frameworks and how they approach moral dilemmas. Would you pull the lever?",
    author: "EthicsExplorer",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Ethics",
    replies: 32,
    likes: 18,
    lastActivity: "4 hours ago",
    isPinned: false,
    isHot: true,
  },
  {
    id: 3,
    title: "Analyzing Political Arguments in Recent Debates",
    description:
      "Breaking down the logical structure and fallacies in recent political discourse. What patterns do you notice?",
    author: "LogicMaster",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Political Philosophy",
    replies: 28,
    likes: 15,
    lastActivity: "6 hours ago",
    isPinned: false,
    isHot: false,
  },
  {
    id: 4,
    title: "Socratic Method in Modern Education",
    description: "How can we better implement Socratic questioning in contemporary learning environments?",
    author: "TeacherPhilosopher",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Education",
    replies: 19,
    likes: 12,
    lastActivity: "8 hours ago",
    isPinned: false,
    isHot: false,
  },
  {
    id: 5,
    title: "The Problem of Induction: Hume's Challenge",
    description: "Discussing David Hume's problem of induction and modern responses to this epistemological challenge.",
    author: "SkepticalThinker",
    avatar: "/placeholder.svg?height=40&width=40",
    category: "Epistemology",
    replies: 24,
    likes: 16,
    lastActivity: "12 hours ago",
    isPinned: false,
    isHot: false,
  },
]

const categories = [
  { name: "Ethics", count: 45, color: "bg-blue-500" },
  { name: "Metaphysics", count: 32, color: "bg-purple-500" },
  { name: "Epistemology", count: 28, color: "bg-green-500" },
  { name: "Political Philosophy", count: 38, color: "bg-red-500" },
  { name: "Logic", count: 52, color: "bg-yellow-500" },
  { name: "Education", count: 19, color: "bg-indigo-500" },
]

export default function ForumPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Socratic Forum</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Engage in structured philosophical discussions using the Socratic method. Ask questions, challenge
          assumptions, and explore ideas together.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Discussion Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Discussions</h2>
            <Button>Start New Discussion</Button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {discussion.isPinned && <Pin className="h-4 w-4 text-blue-600" />}
                        {discussion.isHot && (
                          <Badge variant="destructive" className="text-xs">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Hot
                          </Badge>
                        )}
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">
                        <Link href={`/forum/${discussion.id}`} className="hover:text-blue-600 transition-colors">
                          {discussion.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">{discussion.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={discussion.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{discussion.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{discussion.author}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{discussion.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${category.color}`} />
                      <span className="text-sm">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Forum Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Forum Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Total Discussions</span>
                  <span className="font-medium">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Active Members</span>
                  <span className="font-medium">892</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Posts Today</span>
                  <span className="font-medium">34</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Discussion Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Ask clarifying questions</li>
                <li>• Challenge ideas, not people</li>
                <li>• Provide evidence for claims</li>
                <li>• Stay curious and open-minded</li>
                <li>• Use the Socratic method</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
