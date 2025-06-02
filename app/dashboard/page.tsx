"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Target, Brain, MessageSquare, Trophy, Star, Clock } from "lucide-react"

const userStats = {
  name: "Alex Thompson",
  avatar: "/placeholder.svg?height=80&width=80",
  joinDate: "March 2024",
  totalPoints: 2847,
  rank: "Advanced Thinker",
  coursesCompleted: 3,
  argumentsBuilt: 12,
  fallaciesIdentified: 89,
  forumPosts: 23,
  streak: 7,
}

const recentActivity = [
  {
    type: "course",
    title: "Completed: Logic and Argumentation - Module 5",
    time: "2 hours ago",
    points: 50,
  },
  {
    type: "argument",
    title: "Built argument: 'The Case for Universal Healthcare'",
    time: "1 day ago",
    points: 25,
  },
  {
    type: "forum",
    title: "Posted in: Is Free Will Compatible with Determinism?",
    time: "2 days ago",
    points: 10,
  },
  {
    type: "fallacy",
    title: "Identified 5 fallacies in Fallacy Training",
    time: "3 days ago",
    points: 15,
  },
]

const achievements = [
  {
    id: 1,
    title: "First Steps",
    description: "Complete your first course module",
    icon: "🎯",
    earned: true,
    earnedDate: "March 15, 2024",
  },
  {
    id: 2,
    title: "Argument Architect",
    description: "Build 10 logical arguments",
    icon: "🏗️",
    earned: true,
    earnedDate: "April 2, 2024",
  },
  {
    id: 3,
    title: "Fallacy Hunter",
    description: "Identify 50 logical fallacies",
    icon: "🔍",
    earned: true,
    earnedDate: "April 10, 2024",
  },
  {
    id: 4,
    title: "Socratic Questioner",
    description: "Participate in 20 forum discussions",
    icon: "❓",
    earned: false,
    progress: 23,
  },
  {
    id: 5,
    title: "Philosophy Scholar",
    description: "Complete 5 courses",
    icon: "📚",
    earned: false,
    progress: 60,
  },
  {
    id: 6,
    title: "Master Debater",
    description: "Win 10 debate challenges",
    icon: "🏆",
    earned: false,
    progress: 0,
  },
]

const courseProgress = [
  {
    title: "Logic and Argumentation",
    progress: 75,
    modules: 8,
    completed: 6,
    nextLesson: "Predicate Logic Basics",
  },
  {
    title: "Fallacies & Rhetoric",
    progress: 100,
    modules: 5,
    completed: 5,
    nextLesson: "Course Complete",
  },
  {
    title: "Ethics & Moral Reasoning",
    progress: 40,
    modules: 7,
    completed: 3,
    nextLesson: "Virtue Ethics Introduction",
  },
]

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Learning Dashboard</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Track your progress, achievements, and continue your philosophical journey.
        </p>
      </div>

      {/* User Profile Header */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userStats.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-2xl">
                {userStats.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold mb-2">{userStats.name}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="default">{userStats.rank}</Badge>
                <Badge variant="outline">{userStats.totalPoints} points</Badge>
                <Badge variant="outline">{userStats.streak} day streak</Badge>
              </div>
              <p className="text-slate-600 dark:text-slate-400">Member since {userStats.joinDate}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{userStats.coursesCompleted}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Courses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{userStats.argumentsBuilt}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Arguments</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.coursesCompleted}</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Arguments Built</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.argumentsBuilt}</div>
                <p className="text-xs text-muted-foreground">+3 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fallacies Identified</CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.fallaciesIdentified}</div>
                <p className="text-xs text-muted-foreground">+12 from last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Forum Posts</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.forumPosts}</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Course Progress</CardTitle>
                <CardDescription>Continue where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courseProgress
                  .filter((course) => course.progress < 100)
                  .map((course, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{course.title}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {course.completed}/{course.modules} modules
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-600 dark:text-slate-400">Next: {course.nextLesson}</span>
                        <Button size="sm" variant="outline">
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        {activity.type === "course" && <BookOpen className="h-4 w-4 text-blue-600" />}
                        {activity.type === "argument" && <Target className="h-4 w-4 text-green-600" />}
                        {activity.type === "forum" && <MessageSquare className="h-4 w-4 text-purple-600" />}
                        {activity.type === "fallacy" && <Brain className="h-4 w-4 text-orange-600" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-600 dark:text-slate-400">{activity.time}</span>
                          <Badge variant="outline" className="text-xs">
                            +{activity.points} pts
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="mt-6">
          <div className="space-y-6">
            {courseProgress.map((course, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>
                        {course.completed} of {course.modules} modules completed
                      </CardDescription>
                    </div>
                    <Badge variant={course.progress === 100 ? "default" : "secondary"}>
                      {course.progress === 100 ? "Complete" : "In Progress"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {course.progress === 100 ? "Course completed!" : `Next: ${course.nextLesson}`}
                      </span>
                      <Button variant={course.progress === 100 ? "outline" : "default"}>
                        {course.progress === 100 ? "Review" : "Continue"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={achievement.earned ? "border-green-500" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {achievement.earned ? (
                    <div className="flex items-center gap-2 text-green-600">
                      <Trophy className="h-4 w-4" />
                      <span className="text-sm">Earned {achievement.earnedDate}</span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Activity Timeline</CardTitle>
              <CardDescription>Your complete learning history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                    <div className="mt-1">
                      {activity.type === "course" && <BookOpen className="h-5 w-5 text-blue-600" />}
                      {activity.type === "argument" && <Target className="h-5 w-5 text-green-600" />}
                      {activity.type === "forum" && <MessageSquare className="h-5 w-5 text-purple-600" />}
                      {activity.type === "fallacy" && <Brain className="h-5 w-5 text-orange-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          <span>+{activity.points} points</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
