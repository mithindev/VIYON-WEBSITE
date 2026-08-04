import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Input, Textarea, Label } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  subject: z.string().min(1, { message: "Please select a subject." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { subject: "", name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Contact form submitted:", data);
      toast.success("Message Sent! We will contact you shortly.");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-extrabold tracking-widest uppercase text-sky-500 bg-sky-100 px-3 py-1 rounded-full mb-3">
            Nagercoil Office
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-slate-800 mb-2">
            Talk to Our Solar Experts
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Visit our office or send a message — our team will respond within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">

          {/* ── Left Column ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">

            {/* Info Cards */}
            {[
              {
                Icon: MapPin,
                title: "Office Location",
                lines: ["No.30, Rajakkamangalam Road,", "Ganapathi Nagar, Chettikulam Jn, Nagercoil - 629002."],
              },
              {
                Icon: Phone,
                title: "Call Us",
                lines: ["+91 63811 88563", "+91 88070 03005"],
              },
              {
                Icon: Mail,
                title: "Email Us",
                lines: ["veiyonsmartsolutions@gmail.com"],
              },
            ].map(({ Icon, title, lines }) => (
              <div
                key={title}
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-sky-100 shadow-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-bold text-xs text-slate-700 mb-0.5">{title}</p>
                  {lines.map((l) => (
                    <p key={l} className="text-slate-500 text-xs leading-snug">{l}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-sky-100 shadow-sm h-44 w-full mt-1">
              <iframe
                title="Viyon Office Location"
                src="https://maps.google.com/maps?q=Chettikulam+Jn%2C+Nagercoil&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* ── Right Column: Form ── */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-sky-100 shadow-lg p-6">
            <h2 className="text-xl font-extrabold font-heading text-slate-800 mb-0.5">Send Us a Message</h2>
            <p className="text-slate-400 text-xs mb-5">Fill in the details below and our team will get back to you.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              {/* Name + Subject row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs font-semibold text-slate-600">Your Name</Label>
                  <Input id="name" type="text" placeholder="e.g. Rajesh Kumar" disabled={isSubmitting} {...register("name")} />
                  {errors.name && <p className="text-red-500 text-[11px]">{errors.name.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="subject" className="text-xs font-semibold text-slate-600">Subject</Label>
                  <select
                    id="subject"
                    className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
                    {...register("subject")}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">New Solar Project</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers</option>
                    <option value="partnership">Partnership</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-[11px]">{errors.subject.message}</p>}
                </div>
              </div>

              {/* Phone + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs font-semibold text-slate-600">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 6381188563" disabled={isSubmitting} {...register("phone")} />
                  {errors.phone && <p className="text-red-500 text-[11px]">{errors.phone.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-xs font-semibold text-slate-600">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" disabled={isSubmitting} {...register("email")} />
                  {errors.email && <p className="text-red-500 text-[11px]">{errors.email.message}</p>}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <Label htmlFor="message" className="text-xs font-semibold text-slate-600">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your solar requirements — residential, commercial, capacity, etc."
                  disabled={isSubmitting}
                  {...register("message")}
                  className="min-h-[90px]"
                />
                {errors.message && <p className="text-red-500 text-[11px]">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="sky"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-xl font-bold text-sm py-3 flex items-center justify-center gap-2 shadow-md shadow-sky-200 hover:shadow-sky-300 hover:brightness-105 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-center text-slate-400 text-[11px]">
                We typically respond within <span className="font-semibold text-sky-500">24 hours</span>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
