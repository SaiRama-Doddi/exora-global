"use client";

import React from "react"

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@exoraexports.com",
    link: "mailto:info@exoraexports.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 123 456 7890",
    link: "tel:+911234567890",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Export Lane, Mumbai, India",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM IST",
    link: null,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const message = `
*New Contact Inquiry*
-------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Company:* ${formData.company}
*Country:* ${formData.country}
*Subject:* ${formData.subject}
*Message:* ${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "911234567890";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-primary-foreground md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-center text-lg text-primary-foreground/80">
            Get in touch for all your export needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">
                Have questions or need assistance? We are here to help you with
                all your export requirements.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                        <info.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-medium text-foreground hover:text-secondary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-foreground">Request a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                      <p className="mt-2 text-muted-foreground">
                        Your message has been received. We will get back to you shortly.
                      </p>
                      <Button
                        className="mt-4 bg-transparent"
                        variant="outline"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            country: "",
                            subject: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-foreground">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-foreground">Phone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-foreground">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company name"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="country" className="text-foreground">Country *</Label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            placeholder="Your country"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                          <Select
                            onValueChange={handleSelectChange}
                            value={formData.subject}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="quote">Request a Quote</SelectItem>
                              <SelectItem value="products">Product Information</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="support">Support</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-foreground">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us about your requirements..."
                          rows={5}
                        />
                      </div>

                      <div className="flex flex-col gap-4 sm:flex-row">
                        <Button
                          type="submit"
                          size="lg"
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                        <Button
                          type="button"
                          size="lg"
                          className="flex-1 bg-green-600 text-white hover:bg-green-700"
                          onClick={handleWhatsApp}
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Send via WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Our Location
          </h2>
          <div className="aspect-[2/1] w-full overflow-hidden rounded-lg shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1706180000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EXORA Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
