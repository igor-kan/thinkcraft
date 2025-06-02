"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Trash2, CheckCircle, AlertCircle, Lightbulb, Download, Share } from "lucide-react"

interface Premise {
  id: string
  text: string
}

interface Argument {
  premises: Premise[]
  conclusion: string
  type: string
  title: string
}

export default function ArgumentBuilderPage() {
  const [argument, setArgument] = useState<Argument>({
    premises: [{ id: "1", text: "" }],
    conclusion: "",
    type: "",
    title: "",
  })
  const [analysis, setAnalysis] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const addPremise = () => {
    const newPremise = {
      id: Date.now().toString(),
      text: "",
    }
    setArgument((prev) => ({
      ...prev,
      premises: [...prev.premises, newPremise],
    }))
  }

  const removePremise = (id: string) => {
    if (argument.premises.length > 1) {
      setArgument((prev) => ({
        ...prev,
        premises: prev.premises.filter((p) => p.id !== id),
      }))
    }
  }

  const updatePremise = (id: string, text: string) => {
    setArgument((prev) => ({
      ...prev,
      premises: prev.premises.map((p) => (p.id === id ? { ...p, text } : p)),
    }))
  }

  const analyzeArgument = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        strength: 85,
        validity: "Valid",
        soundness: "Likely Sound",
        fallacies: [],
        suggestions: [
          "Consider adding evidence to support premise 2",
          "The conclusion follows logically from the premises",
          "Strong argument structure with clear reasoning",
        ],
        clarity: 90,
      })
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Argument Builder</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Construct logical arguments with AI-powered feedback on strength, clarity, and potential fallacies.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Argument Construction */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Build Your Argument</CardTitle>
              <CardDescription>
                Start by giving your argument a title, then add premises and a conclusion.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Argument Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Why we should invest in renewable energy"
                  value={argument.title}
                  onChange={(e) => setArgument((prev) => ({ ...prev, title: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="type">Reasoning Type</Label>
                <Select
                  value={argument.type}
                  onValueChange={(value) => setArgument((prev) => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select reasoning type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deductive">Deductive</SelectItem>
                    <SelectItem value="inductive">Inductive</SelectItem>
                    <SelectItem value="abductive">Abductive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Premises</Label>
                  <Button onClick={addPremise} size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Premise
                  </Button>
                </div>
                <div className="space-y-3">
                  {argument.premises.map((premise, index) => (
                    <div key={premise.id} className="flex gap-2">
                      <div className="flex-1">
                        <Label className="text-sm text-slate-600">Premise {index + 1}</Label>
                        <Textarea
                          placeholder="Enter your premise..."
                          value={premise.text}
                          onChange={(e) => updatePremise(premise.id, e.target.value)}
                          className="min-h-[80px]"
                        />
                      </div>
                      {argument.premises.length > 1 && (
                        <Button onClick={() => removePremise(premise.id)} size="sm" variant="ghost" className="mt-6">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="conclusion">Conclusion</Label>
                <Textarea
                  id="conclusion"
                  placeholder="Therefore..."
                  value={argument.conclusion}
                  onChange={(e) => setArgument((prev) => ({ ...prev, conclusion: e.target.value }))}
                  className="min-h-[100px]"
                />
              </div>

              <Button
                onClick={analyzeArgument}
                className="w-full"
                disabled={isAnalyzing || !argument.conclusion || argument.premises.some((p) => !p.text)}
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Argument"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Results */}
        <div className="space-y-6">
          {analysis ? (
            <Tabs defaultValue="analysis" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="analysis">Analysis</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="export">Export</TabsTrigger>
              </TabsList>

              <TabsContent value="analysis" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{analysis.strength}%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Argument Strength</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{analysis.clarity}%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Clarity Score</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Validity:</span>
                        <Badge variant="default">{analysis.validity}</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Soundness:</span>
                        <Badge variant="secondary">{analysis.soundness}</Badge>
                      </div>
                    </div>

                    {analysis.fallacies.length === 0 ? (
                      <Alert>
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>No logical fallacies detected in your argument.</AlertDescription>
                      </Alert>
                    ) : (
                      <Alert>
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>
                          Potential fallacies detected: {analysis.fallacies.join(", ")}
                        </AlertDescription>
                      </Alert>
                    )}

                    <div>
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4" />
                        Suggestions for Improvement
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {analysis.suggestions.map((suggestion: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preview">
                <Card>
                  <CardHeader>
                    <CardTitle>Argument Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{argument.title}</h3>
                        <Badge variant="outline">{argument.type} Reasoning</Badge>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Premises:</h4>
                        <ol className="space-y-2">
                          {argument.premises.map((premise, index) => (
                            <li key={premise.id} className="flex gap-2">
                              <span className="font-medium text-blue-600">P{index + 1}:</span>
                              <span>{premise.text}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Conclusion:</h4>
                        <div className="flex gap-2">
                          <span className="font-medium text-green-600">C:</span>
                          <span>{argument.conclusion}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="export">
                <Card>
                  <CardHeader>
                    <CardTitle>Export & Share</CardTitle>
                    <CardDescription>Save your argument or share it with others for feedback.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download as PDF
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Share className="h-4 w-4 mr-2" />
                      Share Link
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Share className="h-4 w-4 mr-2" />
                      Post to Forum
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>AI Analysis</CardTitle>
                <CardDescription>
                  Complete your argument to receive detailed feedback on its logical structure, strength, and clarity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-slate-500 dark:text-slate-400">
                  <Lightbulb className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Build your argument to see AI-powered analysis</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
