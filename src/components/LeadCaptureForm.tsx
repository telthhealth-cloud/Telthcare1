import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export const LeadCaptureForm = () => {
  const [open, setOpen] = useState(false); // <-- dialog state

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    currentRole: "",
    experience: "",
    city: "",
    employmentStatus: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.currentRole ||
      !formData.experience ||
      !formData.city
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Prepare data for Web3Forms
    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("currentRole", formData.currentRole);
    form.append("experience", formData.experience);
    form.append("city", formData.city);
    form.append("employmentStatus", formData.employmentStatus);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        // OPEN SUCCESS POPUP
        setOpen(true);

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          currentRole: "",
          experience: "",
          city: "",
          employmentStatus: "",
        });
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* SUCCESS DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <CheckCircle2 className="text-green-600 w-7 h-7" />
              Application Submitted!
            </DialogTitle>
            <DialogDescription className="text-base pt-2">
              Thank you for applying. Our team will contact you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex justify-center">
            <Button onClick={() => setOpen(false)} className="w-full">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* FORM */}
      <Card className="w-full max-w-2xl mx-auto shadow-2xl border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Become a Care Manager</CardTitle>
          <CardDescription className="text-base">
            Join care professionals across India building their own independent practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label>Full Name *</Label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Phone Number *</Label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Current Role *</Label>
              <Select
                value={formData.currentRole}
                onValueChange={(value) => setFormData({ ...formData, currentRole: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your current role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="care-home">Care Home Worker</SelectItem>
                  <SelectItem value="palliative">Palliative Care Worker</SelectItem>
                  <SelectItem value="nursing-home">Nursing Home Staff</SelectItem>
                  <SelectItem value="home-care">Independent Home Care Provider</SelectItem>
                  <SelectItem value="other">Other Healthcare Worker</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Years of Experience *</Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => setFormData({ ...formData, experience: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>City *</Label>
              <Input
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Employment Status</Label>
              <Select
                value={formData.employmentStatus}
                onValueChange={(value) => setFormData({ ...formData, employmentStatus: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select employment status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="independent">Independent</SelectItem>
                  <SelectItem value="looking">Looking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" size="lg" className="w-full mt-6">
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Become a Care Manager
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              We respect your privacy. Your information is secure and will never be shared.
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
