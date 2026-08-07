import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input, Textarea, Label } from "@/components/ui/form-fields";
import { Button } from "@/components/ui/button";

const contactFormSchema = z.object({
  category: z.string().min(1, { message: "Please select a category." }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  consumption: z.string().min(1, { message: "Consumption units are required." }),
  ebNumber: z.string().optional(),
  message: z.string().min(5, { message: "Message must be at least 5 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { category: "", name: "", phone: "", consumption: "", ebNumber: "", message: "" },
  });

  const consumptionValue = watch("consumption");

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const messageText = `*New Solar Inquiry from Website*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Category:* ${data.category}
*Approx. Consumption:* ${data.consumption}
*EB Number:* ${data.ebNumber || "Not Provided"}

*Message:*
${data.message}`;

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/916381188563?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      
      toast.success("Redirecting to WhatsApp...");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-28 sm:pt-32 min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">

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
                title="Veiyon Office Location"
                src="https://maps.google.com/maps?q=VEIYON%20SMART%20SOLUTIONS%20Nagercoil&t=&z=16&ie=UTF8&iwloc=&output=embed"
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

              {/* Name + Category row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="text-xs font-semibold text-slate-600">Your Name</Label>
                  <Input id="name" type="text" placeholder="e.g. Rajesh Kumar" disabled={isSubmitting} {...register("name")} />
                  {errors.name && <p className="text-red-500 text-[11px]">{errors.name.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="category" className="text-xs font-semibold text-slate-600">Choose Category</Label>
                  <select
                    id="category"
                    className="w-full text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
                    {...register("category")}
                    disabled={isSubmitting}
                  >
                    <option value="">Select a category</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Residency">Residency</option>
                  </select>
                  {errors.category && <p className="text-red-500 text-[11px]">{errors.category.message}</p>}
                </div>
              </div>

              {/* Phone + Consumption row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs font-semibold text-slate-600">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 6381188563" disabled={isSubmitting} {...register("phone")} />
                  {errors.phone && <p className="text-red-500 text-[11px]">{errors.phone.message}</p>}
                </div>
                <div className="space-y-1">
                  <Label htmlFor="consumption" className="text-xs font-semibold text-slate-600">Consumption in units (approx)</Label>
                  <Input id="consumption" type="text" placeholder="e.g. 350 units" disabled={isSubmitting} {...register("consumption")} />
                  {errors.consumption && <p className="text-red-500 text-[11px]">{errors.consumption.message}</p>}
                </div>
              </div>

              {/* Optional EB Number (shown dynamically) */}
              <AnimatePresence>
                {consumptionValue && consumptionValue.trim() !== "" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-1 overflow-hidden"
                  >
                    <Label htmlFor="ebNumber" className="text-xs font-semibold text-slate-600">EB Number (Optional)</Label>
                    <Input id="ebNumber" type="text" placeholder="e.g. 02-123-004-56" disabled={isSubmitting} {...register("ebNumber")} />
                    {errors.ebNumber && <p className="text-red-500 text-[11px]">{errors.ebNumber.message}</p>}
                  </motion.div>
                )}
              </AnimatePresence>

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
