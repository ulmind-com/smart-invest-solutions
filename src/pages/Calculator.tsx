import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp, Home, Percent, PiggyBank, Target, Clock, ChevronRight, ChevronLeft, Info, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GuidedTour from "@/components/GuidedTour";
type CalculatorType = "sip" | "emi" | "compound" | "simple" | "retirement" | "goal";

interface TutorialStep {
  title: string;
  description: string;
}

const calculatorInfo: Record<CalculatorType, { title: string; description: string; tutorial: TutorialStep[] }> = {
  sip: {
    title: "SIP Calculator",
    description: "Calculate returns on your Systematic Investment Plan",
    tutorial: [
      { title: "Enter Monthly Investment", description: "This is the amount you plan to invest every month in your SIP." },
      { title: "Set Expected Return Rate", description: "Enter the expected annual return rate (typically 10-15% for equity funds)." },
      { title: "Choose Investment Period", description: "Select how many years you want to continue this SIP investment." },
      { title: "View Your Results", description: "See your total investment, expected returns, and final corpus value." }
    ]
  },
  emi: {
    title: "EMI Calculator",
    description: "Calculate your Equated Monthly Installment for loans",
    tutorial: [
      { title: "Enter Loan Amount", description: "The total principal amount you wish to borrow." },
      { title: "Set Interest Rate", description: "Annual interest rate offered by your lender." },
      { title: "Choose Loan Tenure", description: "Duration of the loan in years." },
      { title: "Get EMI Details", description: "View monthly EMI, total interest, and total payment." }
    ]
  },
  compound: {
    title: "Compound Interest Calculator",
    description: "Calculate compound interest on your investments",
    tutorial: [
      { title: "Enter Principal Amount", description: "The initial amount you're investing." },
      { title: "Set Annual Interest Rate", description: "The yearly interest rate for your investment." },
      { title: "Choose Compounding Frequency", description: "How often interest is compounded (yearly, quarterly, monthly)." },
      { title: "Set Time Period", description: "Duration of your investment in years." }
    ]
  },
  simple: {
    title: "Simple Interest Calculator",
    description: "Calculate simple interest on your principal",
    tutorial: [
      { title: "Enter Principal Amount", description: "The initial amount on which interest is calculated." },
      { title: "Set Interest Rate", description: "Annual interest rate as a percentage." },
      { title: "Choose Time Period", description: "Duration for which interest is calculated." },
      { title: "View Interest & Total", description: "See the simple interest earned and total amount." }
    ]
  },
  retirement: {
    title: "Retirement Calculator",
    description: "Plan your retirement corpus and monthly savings",
    tutorial: [
      { title: "Enter Current Age", description: "Your present age to calculate years until retirement." },
      { title: "Set Retirement Age", description: "The age at which you plan to retire." },
      { title: "Monthly Expenses", description: "Your current monthly expenses (adjusted for inflation)." },
      { title: "Expected Returns", description: "Expected annual return rate on your investments." }
    ]
  },
  goal: {
    title: "Goal-Based Savings Calculator",
    description: "Calculate monthly savings needed for your financial goals",
    tutorial: [
      { title: "Set Your Goal Amount", description: "The target amount you want to achieve." },
      { title: "Time to Achieve Goal", description: "Number of years to reach your goal." },
      { title: "Expected Return Rate", description: "Annual return rate on your savings." },
      { title: "View Monthly Savings", description: "See how much you need to save monthly." }
    ]
  }
};

// Interactive tour steps
const tourSteps = [
  {
    target: "[data-tour='calculator-tabs']",
    title: "Choose Your Calculator",
    content: "Select from 6 different financial calculators: SIP, EMI, Compound Interest, Simple Interest, Retirement, and Goal-Based Savings.",
    position: "bottom" as const,
  },
  {
    target: "[data-tour='input-fields']",
    title: "Enter Your Values",
    content: "Fill in your financial details here. Each calculator has specific inputs like amount, interest rate, and time period.",
    position: "bottom" as const,
  },
  {
    target: "[data-tour='results-section']",
    title: "View Your Results",
    content: "See instant calculations! Results update automatically as you change values. The highlighted box shows your final outcome.",
    position: "top" as const,
  },
  {
    target: "[data-tour='tutorial-panel']",
    title: "Step-by-Step Guide",
    content: "This panel provides detailed instructions for each calculator. Navigate through steps to understand every input field.",
    position: "right" as const,
  },
  {
    target: "[data-tour='quick-tips']",
    title: "Financial Tips",
    content: "Get smart financial advice and tips to help you make better investment decisions.",
    position: "right" as const,
  },
];

const CalculatorPage = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("sip");
  const [tutorialStep, setTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [showTour, setShowTour] = useState(false);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  // Check if user has seen the tour before
  useEffect(() => {
    const seen = localStorage.getItem("calculator-tour-completed");
    if (!seen) {
      // Auto-start tour for first-time visitors after a short delay
      const timer = setTimeout(() => setShowTour(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const handleTourComplete = () => {
    setShowTour(false);
    setHasSeenTour(true);
    localStorage.setItem("calculator-tour-completed", "true");
  };

  const handleStartTour = () => {
    setShowTour(true);
  };
  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState<string>("10000");
  const [sipRate, setSipRate] = useState<string>("12");
  const [sipYears, setSipYears] = useState<string>("10");

  // EMI Calculator State
  const [emiPrincipal, setEmiPrincipal] = useState<string>("1000000");
  const [emiRate, setEmiRate] = useState<string>("8.5");
  const [emiYears, setEmiYears] = useState<string>("20");

  // Compound Interest State
  const [ciPrincipal, setCiPrincipal] = useState<string>("100000");
  const [ciRate, setCiRate] = useState<string>("10");
  const [ciYears, setCiYears] = useState<string>("5");
  const [ciFrequency, setCiFrequency] = useState<string>("12");

  // Simple Interest State
  const [siPrincipal, setSiPrincipal] = useState<string>("100000");
  const [siRate, setSiRate] = useState<string>("8");
  const [siYears, setSiYears] = useState<string>("3");

  // Retirement Calculator State
  const [currentAge, setCurrentAge] = useState<string>("30");
  const [retirementAge, setRetirementAge] = useState<string>("60");
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>("50000");
  const [inflationRate, setInflationRate] = useState<string>("6");
  const [retReturnRate, setRetReturnRate] = useState<string>("10");

  // Goal Calculator State
  const [goalAmount, setGoalAmount] = useState<string>("1000000");
  const [goalYears, setGoalYears] = useState<string>("5");
  const [goalRate, setGoalRate] = useState<string>("12");

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // SIP Calculation
  const calculateSIP = () => {
    const P = parseFloat(sipMonthly) || 0;
    const r = (parseFloat(sipRate) || 0) / 100 / 12;
    const n = (parseFloat(sipYears) || 0) * 12;
    
    if (r === 0) return { invested: P * n, returns: 0, total: P * n };
    
    const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const invested = P * n;
    return {
      invested,
      returns: futureValue - invested,
      total: futureValue
    };
  };

  // EMI Calculation
  const calculateEMI = () => {
    const P = parseFloat(emiPrincipal) || 0;
    const r = (parseFloat(emiRate) || 0) / 100 / 12;
    const n = (parseFloat(emiYears) || 0) * 12;
    
    if (r === 0) return { emi: P / n, totalInterest: 0, totalPayment: P };
    
    const emi = P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    return {
      emi,
      totalInterest: totalPayment - P,
      totalPayment
    };
  };

  // Compound Interest Calculation
  const calculateCI = () => {
    const P = parseFloat(ciPrincipal) || 0;
    const r = (parseFloat(ciRate) || 0) / 100;
    const n = parseFloat(ciFrequency) || 1;
    const t = parseFloat(ciYears) || 0;
    
    const amount = P * Math.pow(1 + r / n, n * t);
    return {
      principal: P,
      interest: amount - P,
      total: amount
    };
  };

  // Simple Interest Calculation
  const calculateSI = () => {
    const P = parseFloat(siPrincipal) || 0;
    const r = (parseFloat(siRate) || 0) / 100;
    const t = parseFloat(siYears) || 0;
    
    const interest = P * r * t;
    return {
      principal: P,
      interest,
      total: P + interest
    };
  };

  // Retirement Calculation
  const calculateRetirement = () => {
    const currentAgeNum = parseFloat(currentAge) || 0;
    const retAgeNum = parseFloat(retirementAge) || 0;
    const expenses = parseFloat(monthlyExpenses) || 0;
    const inflation = (parseFloat(inflationRate) || 0) / 100;
    const returnRate = (parseFloat(retReturnRate) || 0) / 100;
    
    const yearsToRetirement = retAgeNum - currentAgeNum;
    const yearsInRetirement = 25; // Assuming 25 years in retirement
    
    // Future monthly expenses adjusted for inflation
    const futureExpenses = expenses * Math.pow(1 + inflation, yearsToRetirement);
    
    // Corpus needed at retirement
    const realReturnRate = (1 + returnRate) / (1 + inflation) - 1;
    const corpusNeeded = futureExpenses * 12 * ((1 - Math.pow(1 + realReturnRate, -yearsInRetirement)) / realReturnRate);
    
    // Monthly savings needed
    const monthlyRate = returnRate / 12;
    const months = yearsToRetirement * 12;
    const monthlySavings = corpusNeeded / ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate * (1 + monthlyRate));
    
    return {
      corpusNeeded,
      monthlySavings,
      futureExpenses: futureExpenses * 12
    };
  };

  // Goal Calculation
  const calculateGoal = () => {
    const goal = parseFloat(goalAmount) || 0;
    const years = parseFloat(goalYears) || 0;
    const rate = (parseFloat(goalRate) || 0) / 100 / 12;
    const months = years * 12;
    
    if (rate === 0) return { monthlySavings: goal / months, totalInvested: goal, returns: 0 };
    
    const monthlySavings = goal / ((Math.pow(1 + rate, months) - 1) / rate * (1 + rate));
    const totalInvested = monthlySavings * months;
    
    return {
      monthlySavings,
      totalInvested,
      returns: goal - totalInvested
    };
  };

  const sipResult = calculateSIP();
  const emiResult = calculateEMI();
  const ciResult = calculateCI();
  const siResult = calculateSI();
  const retResult = calculateRetirement();
  const goalResult = calculateGoal();

  const currentTutorial = calculatorInfo[activeCalculator].tutorial;

  const nextStep = () => {
    if (tutorialStep < currentTutorial.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setShowTutorial(false);
    }
  };

  const prevStep = () => {
    if (tutorialStep > 0) {
      setTutorialStep(tutorialStep - 1);
    }
  };

  const handleCalculatorChange = (value: string) => {
    setActiveCalculator(value as CalculatorType);
    setTutorialStep(0);
    setShowTutorial(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Guided Tour */}
      <GuidedTour
        steps={tourSteps}
        isOpen={showTour}
        onClose={() => setShowTour(false)}
        onComplete={handleTourComplete}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleStartTour}
              className="gap-2 border-primary/30 hover:border-primary hover:bg-primary/10"
            >
              <Play className="w-4 h-4" />
              <span className="hidden sm:inline">Take a Tour</span>
            </Button>
            <div className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-foreground hidden sm:inline">Finance Calculator</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner for first-time users */}
        {!hasSeenTour && !showTour && (
          <div className="mb-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2 justify-center sm:justify-start">
                  <Play className="w-5 h-5 text-primary" />
                  New to this calculator?
                </h2>
                <p className="text-muted-foreground mt-1">
                  Start a guided walkthrough to see how to enter values and read your results in under a minute.
                </p>
              </div>
              <Button onClick={handleStartTour} className="gap-2 whitespace-nowrap">
                <Play className="w-4 h-4" />
                Take a Quick Tour
              </Button>
            </div>
          </div>
        )}

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Financial Calculators
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators. 
            Follow the step-by-step tutorials to understand each calculation.
          </p>
        </div>

        {/* Calculator Tabs */}
        <Tabs value={activeCalculator} onValueChange={handleCalculatorChange} className="w-full">
          <TabsList data-tour="calculator-tabs" className="w-full flex flex-wrap h-auto gap-2 bg-muted/50 p-2 rounded-xl mb-8">
            <TabsTrigger value="sip" className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="w-4 h-4" />
              <span className="hidden sm:inline">SIP</span>
            </TabsTrigger>
            <TabsTrigger value="emi" className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">EMI</span>
            </TabsTrigger>
            <TabsTrigger value="compound" className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Percent className="w-4 h-4" />
              <span className="hidden sm:inline">Compound</span>
            </TabsTrigger>
            <TabsTrigger value="simple" className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Simple</span>
            </TabsTrigger>
            <TabsTrigger value="retirement" className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">Retirement</span>
            </TabsTrigger>
            <TabsTrigger value="goal" className="flex-1 min-w-[120px] gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Target className="w-4 h-4" />
              <span className="hidden sm:inline">Goal</span>
            </TabsTrigger>
          </TabsList>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tutorial Section */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card data-tour="tutorial-panel" className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Info className="w-5 h-5 text-primary" />
                      How to Use
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTutorial(!showTutorial)}
                    >
                      {showTutorial ? "Hide" : "Show"}
                    </Button>
                  </div>
                  <CardDescription>{calculatorInfo[activeCalculator].description}</CardDescription>
                </CardHeader>
                {showTutorial && (
                  <CardContent>
                    <div className="space-y-4">
                      {/* Progress Dots */}
                      <div className="flex justify-center gap-2 mb-4">
                        {currentTutorial.map((_, index) => (
                          <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === tutorialStep ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Tutorial Content */}
                      <div className="bg-background/80 rounded-lg p-4 min-h-[120px]">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                            Step {tutorialStep + 1}
                          </span>
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {currentTutorial[tutorialStep].title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {currentTutorial[tutorialStep].description}
                        </p>
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={prevStep}
                          disabled={tutorialStep === 0}
                          className="flex-1"
                        >
                          <ChevronLeft className="w-4 h-4 mr-1" />
                          Previous
                        </Button>
                        <Button
                          size="sm"
                          onClick={nextStep}
                          className="flex-1"
                        >
                          {tutorialStep === currentTutorial.length - 1 ? "Got it!" : "Next"}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Quick Tips */}
              <Card data-tour="quick-tips" className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <PiggyBank className="w-5 h-5 text-primary" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <p>• Start investing early to benefit from compound interest</p>
                  <p>• Diversify your investments across different asset classes</p>
                  <p>• Review your financial goals annually</p>
                  <p>• Maintain an emergency fund of 6 months expenses</p>
                </CardContent>
              </Card>
            </div>

            {/* Calculator Section */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* SIP Calculator */}
              <TabsContent value="sip" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      SIP Calculator
                    </CardTitle>
                    <CardDescription>
                      Calculate the future value of your Systematic Investment Plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div data-tour="input-fields" className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sip-monthly">Monthly Investment (₹)</Label>
                        <Input
                          id="sip-monthly"
                          type="number"
                          value={sipMonthly}
                          onChange={(e) => setSipMonthly(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sip-rate">Expected Return (%)</Label>
                        <Input
                          id="sip-rate"
                          type="number"
                          step="0.1"
                          value={sipRate}
                          onChange={(e) => setSipRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sip-years">Time Period (Years)</Label>
                        <Input
                          id="sip-years"
                          type="number"
                          value={sipYears}
                          onChange={(e) => setSipYears(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    {/* Results */}
                    <div data-tour="results-section" className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Invested Amount</p>
                        <p className="text-xl font-bold text-foreground">{formatCurrency(sipResult.invested)}</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Est. Returns</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(sipResult.returns)}</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-center">
                        <p className="text-sm text-primary-foreground/80 mb-1">Total Value</p>
                        <p className="text-xl font-bold text-primary-foreground">{formatCurrency(sipResult.total)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* EMI Calculator */}
              <TabsContent value="emi" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5 text-primary" />
                      EMI Calculator
                    </CardTitle>
                    <CardDescription>
                      Calculate your Equated Monthly Installment for home/car loans
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emi-principal">Loan Amount (₹)</Label>
                        <Input
                          id="emi-principal"
                          type="number"
                          value={emiPrincipal}
                          onChange={(e) => setEmiPrincipal(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emi-rate">Interest Rate (%)</Label>
                        <Input
                          id="emi-rate"
                          type="number"
                          step="0.1"
                          value={emiRate}
                          onChange={(e) => setEmiRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emi-years">Loan Tenure (Years)</Label>
                        <Input
                          id="emi-years"
                          type="number"
                          value={emiYears}
                          onChange={(e) => setEmiYears(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-center">
                        <p className="text-sm text-primary-foreground/80 mb-1">Monthly EMI</p>
                        <p className="text-xl font-bold text-primary-foreground">{formatCurrency(emiResult.emi)}</p>
                      </div>
                      <div className="bg-destructive/10 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Interest</p>
                        <p className="text-xl font-bold text-destructive">{formatCurrency(emiResult.totalInterest)}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Payment</p>
                        <p className="text-xl font-bold text-foreground">{formatCurrency(emiResult.totalPayment)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Compound Interest Calculator */}
              <TabsContent value="compound" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Percent className="w-5 h-5 text-primary" />
                      Compound Interest Calculator
                    </CardTitle>
                    <CardDescription>
                      See how your money grows with compound interest
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ci-principal">Principal (₹)</Label>
                        <Input
                          id="ci-principal"
                          type="number"
                          value={ciPrincipal}
                          onChange={(e) => setCiPrincipal(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ci-rate">Interest Rate (%)</Label>
                        <Input
                          id="ci-rate"
                          type="number"
                          step="0.1"
                          value={ciRate}
                          onChange={(e) => setCiRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ci-frequency">Compounding/Year</Label>
                        <Input
                          id="ci-frequency"
                          type="number"
                          value={ciFrequency}
                          onChange={(e) => setCiFrequency(e.target.value)}
                          className="text-lg"
                          placeholder="12 for monthly"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ci-years">Time (Years)</Label>
                        <Input
                          id="ci-years"
                          type="number"
                          value={ciYears}
                          onChange={(e) => setCiYears(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Principal</p>
                        <p className="text-xl font-bold text-foreground">{formatCurrency(ciResult.principal)}</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Interest Earned</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(ciResult.interest)}</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-center">
                        <p className="text-sm text-primary-foreground/80 mb-1">Total Amount</p>
                        <p className="text-xl font-bold text-primary-foreground">{formatCurrency(ciResult.total)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Simple Interest Calculator */}
              <TabsContent value="simple" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-primary" />
                      Simple Interest Calculator
                    </CardTitle>
                    <CardDescription>
                      Calculate simple interest on your investments
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="si-principal">Principal (₹)</Label>
                        <Input
                          id="si-principal"
                          type="number"
                          value={siPrincipal}
                          onChange={(e) => setSiPrincipal(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="si-rate">Interest Rate (%)</Label>
                        <Input
                          id="si-rate"
                          type="number"
                          step="0.1"
                          value={siRate}
                          onChange={(e) => setSiRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="si-years">Time (Years)</Label>
                        <Input
                          id="si-years"
                          type="number"
                          value={siYears}
                          onChange={(e) => setSiYears(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Principal</p>
                        <p className="text-xl font-bold text-foreground">{formatCurrency(siResult.principal)}</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Interest Earned</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(siResult.interest)}</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-center">
                        <p className="text-sm text-primary-foreground/80 mb-1">Total Amount</p>
                        <p className="text-xl font-bold text-primary-foreground">{formatCurrency(siResult.total)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Retirement Calculator */}
              <TabsContent value="retirement" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Retirement Calculator
                    </CardTitle>
                    <CardDescription>
                      Plan your retirement and calculate required savings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-age">Current Age</Label>
                        <Input
                          id="current-age"
                          type="number"
                          value={currentAge}
                          onChange={(e) => setCurrentAge(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="retirement-age">Retirement Age</Label>
                        <Input
                          id="retirement-age"
                          type="number"
                          value={retirementAge}
                          onChange={(e) => setRetirementAge(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthly-expenses">Monthly Expenses (₹)</Label>
                        <Input
                          id="monthly-expenses"
                          type="number"
                          value={monthlyExpenses}
                          onChange={(e) => setMonthlyExpenses(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inflation">Inflation (%)</Label>
                        <Input
                          id="inflation"
                          type="number"
                          step="0.1"
                          value={inflationRate}
                          onChange={(e) => setInflationRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ret-return">Expected Return (%)</Label>
                        <Input
                          id="ret-return"
                          type="number"
                          step="0.1"
                          value={retReturnRate}
                          onChange={(e) => setRetReturnRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Yearly Expenses at Retirement</p>
                        <p className="text-xl font-bold text-foreground">{formatCurrency(retResult.futureExpenses)}</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Corpus Needed</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(retResult.corpusNeeded)}</p>
                      </div>
                      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-center">
                        <p className="text-sm text-primary-foreground/80 mb-1">Monthly Savings Required</p>
                        <p className="text-xl font-bold text-primary-foreground">{formatCurrency(retResult.monthlySavings)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Goal Calculator */}
              <TabsContent value="goal" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Goal-Based Savings Calculator
                    </CardTitle>
                    <CardDescription>
                      Calculate how much to save monthly to reach your financial goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="goal-amount">Goal Amount (₹)</Label>
                        <Input
                          id="goal-amount"
                          type="number"
                          value={goalAmount}
                          onChange={(e) => setGoalAmount(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal-years">Years to Achieve</Label>
                        <Input
                          id="goal-years"
                          type="number"
                          value={goalYears}
                          onChange={(e) => setGoalYears(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="goal-rate">Expected Return (%)</Label>
                        <Input
                          id="goal-rate"
                          type="number"
                          step="0.1"
                          value={goalRate}
                          onChange={(e) => setGoalRate(e.target.value)}
                          className="text-lg"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-center">
                        <p className="text-sm text-primary-foreground/80 mb-1">Monthly Savings Needed</p>
                        <p className="text-xl font-bold text-primary-foreground">{formatCurrency(goalResult.monthlySavings)}</p>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Total Investment</p>
                        <p className="text-xl font-bold text-foreground">{formatCurrency(goalResult.totalInvested)}</p>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 text-center">
                        <p className="text-sm text-muted-foreground mb-1">Returns Earned</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(goalResult.returns)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
          <h3 className="font-semibold text-foreground mb-2">Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            These calculators are for illustrative purposes only and should not be considered as financial advice. 
            Actual returns may vary based on market conditions and other factors. Please consult a certified 
            financial advisor before making any investment decisions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CalculatorPage;
