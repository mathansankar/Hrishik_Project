import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Star, Coins, Book, Users, Camera, Leaf, Trophy, Target, Heart, Globe, Shield } from 'lucide-react';

export default function KidExplorer() {
  const [activeQuest, setActiveQuest] = useState('paris');
  const [points, setPoints] = useState(1250);
  const [level, setLevel] = useState(3);
  const [budget, setBudget] = useState(500);

  const destinations = [
    {
      id: 'bangalore',
      name: 'Bangalore, Karnataka',
      image: '🌆',
      difficulty: 'Easy',
      points: 200,
      cultural_score: 85,
      kid_friendly: 95,
      description: 'Garden City of India with Lalbagh, tech parks, and delicious South Indian food!'
    },
    {
      id: 'mysore',
      name: 'Mysore, Karnataka',
      image: '🏰',
      difficulty: 'Medium',
      points: 300,
      cultural_score: 98,
      kid_friendly: 90,
      description: 'City of Palaces! Explore magnificent Mysore Palace and learn about Tipu Sultan!'
    },
    {
      id: 'chennai',
      name: 'Chennai, Tamil Nadu',
      image: '🏖️',
      difficulty: 'Medium',
      points: 350,
      cultural_score: 92,
      kid_friendly: 85,
      description: 'Gateway to South India with Marina Beach, temples, and Bharatanatyam dance!'
    },
    {
      id: 'kochi',
      name: 'Kochi, Kerala',
      image: '⛵',
      difficulty: 'Medium',
      points: 320,
      cultural_score: 90,
      kid_friendly: 88,
      description: 'Queen of Arabian Sea with Chinese fishing nets, spice markets, and backwaters!'
    },
    {
      id: 'hyderabad',
      name: 'Hyderabad, Telangana',
      image: '🕌',
      difficulty: 'Medium',
      points: 340,
      cultural_score: 95,
      kid_friendly: 87,
      description: 'City of Nizams with Charminar, Golconda Fort, and world-famous biryani!'
    },
    {
      id: 'madurai',
      name: 'Madurai, Tamil Nadu',
      image: '🛕',
      difficulty: 'Hard',
      points: 400,
      cultural_score: 100,
      kid_friendly: 80,
      description: 'Temple City with magnificent Meenakshi Temple and 2500 years of history!'
    },
    {
      id: 'hampi',
      name: 'Hampi, Karnataka',
      image: '🏛️',
      difficulty: 'Hard',
      points: 450,
      cultural_score: 100,
      kid_friendly: 75,
      description: 'UNESCO World Heritage Site with ancient Vijayanagara Empire ruins!'
    },
    {
      id: 'pondicherry',
      name: 'Pondicherry, Puducherry',
      image: '🇫🇷',
      difficulty: 'Easy',
      points: 250,
      cultural_score: 85,
      kid_friendly: 92,
      description: 'French colonial charm with colorful streets, beaches, and Auroville!'
    },
    {
      id: 'ooty',
      name: 'Ooty, Tamil Nadu',
      image: '🚂',
      difficulty: 'Easy',
      points: 280,
      cultural_score: 75,
      kid_friendly: 95,
      description: 'Queen of Hill Stations with toy train, tea gardens, and cool weather!'
    },
    {
      id: 'coimbatore',
      name: 'Coimbatore, Tamil Nadu',
      image: '🏭',
      difficulty: 'Medium',
      points: 300,
      cultural_score: 80,
      kid_friendly: 88,
      description: 'Manchester of South India with textile mills, temples, and Nilgiri hills nearby!'
    }
  ];

  const achievements = [
    { icon: '🎯', name: 'First Quest', description: 'Complete your first adventure plan', unlocked: true },
    { icon: '💰', name: 'Budget Master', description: 'Stay within budget for 3 trips', unlocked: true },
    { icon: '🌍', name: 'Globe Trotter', description: 'Plan trips to 5 different countries', unlocked: false },
    { icon: '📚', name: 'Culture Expert', description: 'Complete 10 cultural lessons', unlocked: true },
    { icon: '🌱', name: 'Eco Warrior', description: 'Choose sustainable options for 5 trips', unlocked: false },
    { icon: '👥', name: 'Ambassador', description: 'Connect with 3 local kid ambassadors', unlocked: false }
  ];

  const budgetItems = [
    { category: 'Transportation', amount: 200, icon: '✈️' },
    { category: 'Accommodation', amount: 150, icon: '🏨' },
    { category: 'Food', amount: 100, icon: '🍽️' },
    { category: 'Activities', amount: 50, icon: '🎢' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🌟</div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Kid Explorer
                </h1>
                <p className="text-sm text-gray-600">Adventure Awaits!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="flex items-center space-x-1 text-yellow-600">
                  <Coins className="h-4 w-4" />
                  <span className="font-bold">{points}</span>
                </div>
                <div className="text-xs text-gray-500">Adventure Points</div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-purple-600">
                  <Trophy className="h-4 w-4" />
                  <span className="font-bold">Level {level}</span>
                </div>
                <div className="text-xs text-gray-500">Explorer Rank</div>
              </div>
              <Avatar>
                <AvatarFallback className="bg-gradient-to-r from-purple-400 to-pink-400 text-white">
                  KE
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="destinations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/60 backdrop-blur-sm">
            <TabsTrigger value="destinations">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Destinations</span>
            </TabsTrigger>
            <TabsTrigger value="budget">
              <Coins className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Budget</span>
            </TabsTrigger>
            <TabsTrigger value="culture">
              <Book className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Culture</span>
            </TabsTrigger>
            <TabsTrigger value="safety">
              <Shield className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Safety</span>
            </TabsTrigger>
            <TabsTrigger value="journal">
              <Camera className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Journal</span>
            </TabsTrigger>
            <TabsTrigger value="achievements">
              <Trophy className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Rewards</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="destinations" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Choose Your Next Adventure!</h2>
              <p className="text-gray-600">Discover amazing places around the world and earn adventure points!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {destinations.map((dest) => (
                <Card key={dest.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-300">
                  <CardHeader className="text-center pb-2">
                    <div className="text-6xl mb-2">{dest.image}</div>
                    <CardTitle className="text-xl">{dest.name}</CardTitle>
                    <div className="flex justify-center space-x-2">
                      <Badge variant={dest.difficulty === 'Easy' ? 'default' : dest.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                        {dest.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-yellow-600">
                        +{dest.points} pts
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">{dest.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cultural Score</span>
                        <span>{dest.cultural_score}%</span>
                      </div>
                      <Progress value={dest.cultural_score} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span>Kid Friendly</span>
                        <span>{dest.kid_friendly}%</span>
                      </div>
                      <Progress value={dest.kid_friendly} className="h-2" />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Start Quest! 🚀
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="budget" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Smart Budget Planner 💰</h2>
              <p className="text-gray-600">Learn to manage money while planning your dream trip!</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Coins className="h-5 w-5 text-yellow-500" />
                    <span>Budget Breakdown</span>
                  </CardTitle>
                  <CardDescription>Your South India adventure budget</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {budgetItems.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium">{item.category}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Input 
                            type="number" 
                            value={item.amount} 
                            className="w-20 text-right"
                          />
                          <span className="text-sm text-gray-500">USD</span>
                        </div>
                      </div>
                      <Progress value={(item.amount / budget) * 100} className="h-2" />
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total Budget:</span>
                      <span className="text-green-600">${budgetItems.reduce((sum, item) => sum + item.amount, 0)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    <span>Eco-Friendly Options</span>
                  </CardTitle>
                  <CardDescription>Make sustainable choices and earn bonus points!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🚂</div>
                        <div>
                          <div className="font-medium">Take the Train</div>
                          <div className="text-sm text-gray-600">80% less CO2 than flying</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-bold">+50 pts</div>
                        <Badge className="bg-green-100 text-green-800">Eco Choice</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Cultural Learning Hub 📚</h2>
              <p className="text-gray-600">Discover fascinating facts about your destination!</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span>Paris Fun Facts</span>
                </CardTitle>
                <CardDescription>Learn amazing things about the City of Light!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">🗼</div>
                    <div>
                      <div className="font-bold text-blue-800">Did you know?</div>
                      <div className="text-sm text-gray-700">The Eiffel Tower was built in just 2 years and 2 months! It's made of iron and weighs about 10,100 tons.</div>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                  Take Culture Quiz! 🧠 (+100 pts)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="safety" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Safety Buddy System 🛡️</h2>
              <p className="text-gray-600">Stay safe and connected during your adventures!</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Your Travel Group</span>
                </CardTitle>
                <CardDescription>Keep track of your friends and classmates!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-green-100">SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Sarah Martinez</div>
                      <div className="text-sm text-gray-600">Last seen: Eiffel Tower (2 min ago)</div>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-green-500">
                  📍 Share My Location
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="journal" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Trip Journal Creator 📖</h2>
              <p className="text-gray-600">Create amazing memories and share your adventures!</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-pink-500" />
                  <span>Photo Memories</span>
                </CardTitle>
                <CardDescription>Capture and organize your favorite moments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center text-4xl">
                    🗼
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-blue-200 to-green-200 rounded-lg flex items-center justify-center text-4xl">
                    🥐
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                  📱 Upload Photos
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">Adventure Achievements 🏆</h2>
              <p className="text-gray-600">Unlock badges and rewards for your exploring skills!</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`transition-all duration-300 ${achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`text-6xl mb-4 ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h3 className={`font-bold text-lg mb-2 ${achievement.unlocked ? 'text-yellow-800' : 'text-gray-500'}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${achievement.unlocked ? 'text-gray-700' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                    {achievement.unlocked && (
                      <Badge className="mt-3 bg-yellow-500 text-white">
                        Unlocked! 🎉
                      </Badge>
                    )}
                    {!achievement.unlocked && (
                      <Badge variant="outline" className="mt-3">
                        Locked 🔒
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}