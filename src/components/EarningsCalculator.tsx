import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Users, Calendar } from "lucide-react";

interface EarningsCalculatorProps {
  category?: "ccm-cm" | "doctor";
}

export const EarningsCalculator = ({ category = "ccm-cm" }: EarningsCalculatorProps) => {
  const [visits, setVisits] = useState([15]);
  const [subscriptions, setSubscriptions] = useState([5]);

  const visitRate = category === "doctor" ? 1150 : 400; // Doctor: avg 800-1500, CM: avg 300-500
  const subscriptionRate = category === "doctor" ? 4000 : 1500; // Doctor: avg 3000-5000, CM: avg 1000-2000

  const weeklyVisits = visits[0];
  const monthlyVisits = weeklyVisits * 4;
  const monthlyFromVisits = monthlyVisits * visitRate;

  const monthlyClients = subscriptions[0];
  const monthlyFromSubscriptions = monthlyClients * subscriptionRate;

  const totalMonthly = monthlyFromVisits + monthlyFromSubscriptions;

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Calculate Your Earning Potential</CardTitle>
        <CardDescription>
          {category === "doctor" 
            ? "Adjust the sliders to see what you could earn as a Telth Doctor"
            : "Adjust the sliders to see what you could earn as a Telth Care Manager"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">
              {category === "doctor" ? "Home Consultations Per Week" : "Home Visits Per Week"}
            </Label>
            <span className="text-2xl font-bold text-primary">{weeklyVisits}</span>
          </div>
          <Slider
            value={visits}
            onValueChange={setVisits}
            max={50}
            min={1}
            step={1}
            className="w-full"
          />
          <p className="text-sm text-muted-foreground">
            {monthlyVisits} visits/month × ₹{visitRate} = ₹{monthlyFromVisits.toLocaleString("en-IN")}/month
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">
              {category === "doctor" ? "Ongoing Patients" : "Subscription Clients"}
            </Label>
            <span className="text-2xl font-bold text-secondary">{monthlyClients}</span>
          </div>
          <Slider
            value={subscriptions}
            onValueChange={setSubscriptions}
            max={30}
            min={0}
            step={1}
            className="w-full"
          />
          <p className="text-sm text-muted-foreground">
            {monthlyClients} clients × ₹{subscriptionRate}/month = ₹{monthlyFromSubscriptions.toLocaleString("en-IN")}/month
          </p>
        </div>

        <div className="border-t pt-6 mt-6">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-2">Your Total Monthly Income</p>
            <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ₹{totalMonthly.toLocaleString("en-IN")}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Plus referral bonuses and potential for growth
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Weekly Visits</p>
              <p className="font-semibold">{weeklyVisits} visits</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Recurring Clients</p>
              <p className="font-semibold">{monthlyClients} clients</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
            <TrendingUp className="h-8 w-8 text-secondary" />
            <div>
              <p className="text-xs text-muted-foreground">Growth Potential</p>
              <p className="font-semibold">Unlimited</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
