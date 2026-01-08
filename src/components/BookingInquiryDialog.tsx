import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MessageCircle, Phone, CalendarIcon, ArrowLeft, Send, Info } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";

type ContactMethod = "email" | "whatsapp" | "viber" | null;
type VehicleType = "boat" | "rib" | "land";

const countryCodes = [
  { code: "+30", country: "Greece", flag: "🇬🇷" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+357", country: "Cyprus", flag: "🇨🇾" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+972", country: "Israel", flag: "🇮🇱" },
];

interface BookingInquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleName: string;
  vehicleType: VehicleType;
}

const BookingInquiryDialog = ({
  open,
  onOpenChange,
  vehicleName,
  vehicleType,
}: BookingInquiryDialogProps) => {
  const { t, language } = useLanguage();
  const [contactMethod, setContactMethod] = useState<ContactMethod>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+30");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [notes, setNotes] = useState("");

  const showPeopleField = vehicleType === "boat" || vehicleType === "rib";

  const resetForm = () => {
    setContactMethod(null);
    setName("");
    setEmail("");
    setCountryCode("+30");
    setPhoneNumber("");
    setPickupDate(undefined);
    setDropoffDate(undefined);
    setNumberOfPeople("");
    setNotes("");
  };

  const handleClose = () => {
    resetForm();
    onOpenChange(false);
  };

  const handleBack = () => {
    setContactMethod(null);
  };

  const buildMessage = () => {
    const lines = [
      `${language === "en" ? "Inquiry for" : "Ενδιαφέρον για"}: ${vehicleName}`,
      `${language === "en" ? "Name" : "Όνομα"}: ${name}`,
    ];

    if (contactMethod === "email") {
      lines.push(`${language === "en" ? "Email" : "Email"}: ${email}`);
    } else {
      lines.push(`${language === "en" ? "Phone" : "Τηλέφωνο"}: ${countryCode}${phoneNumber}`);
    }

    if (pickupDate) {
      lines.push(`${language === "en" ? "Pick-up Date" : "Ημ/νία Παραλαβής"}: ${format(pickupDate, "PPP")}`);
    }
    if (dropoffDate) {
      lines.push(`${language === "en" ? "Drop-off Date" : "Ημ/νία Επιστροφής"}: ${format(dropoffDate, "PPP")}`);
    }
    if (showPeopleField && numberOfPeople) {
      lines.push(`${language === "en" ? "Number of People" : "Αριθμός Ατόμων"}: ${numberOfPeople}`);
    }
    if (notes) {
      lines.push(`${language === "en" ? "Notes" : "Σημειώσεις"}: ${notes}`);
    }

    return lines.join("\n");
  };

  const handleSubmit = () => {
    const message = buildMessage();
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "306974000000"; // Replace with actual phone number

    switch (contactMethod) {
      case "email":
        window.location.href = `mailto:info@meganisi-rentals.com?subject=${encodeURIComponent(`Inquiry: ${vehicleName}`)}&body=${encodedMessage}`;
        break;
      case "whatsapp":
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
        break;
      case "viber":
        window.open(`viber://chat?number=${phoneNumber}&text=${encodedMessage}`, "_blank");
        break;
    }

    handleClose();
  };

  const contactMethods = [
    {
      id: "email" as const,
      icon: Mail,
      title: language === "en" ? "Email" : "Email",
      description: language === "en" ? "Send us an email" : "Στείλτε μας email",
    },
    {
      id: "whatsapp" as const,
      icon: MessageCircle,
      title: "WhatsApp",
      description: language === "en" ? "Message us on WhatsApp" : "Στείλτε μήνυμα στο WhatsApp",
    },
    {
      id: "viber" as const,
      icon: Phone,
      title: "Viber",
      description: language === "en" ? "Contact us via Viber" : "Επικοινωνήστε μέσω Viber",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-screen h-screen max-w-none max-h-none m-0 rounded-none flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6">
            <DialogHeader className="mb-8">
              <DialogTitle className="font-display text-2xl sm:text-3xl text-center">
                {contactMethod
                  ? language === "en"
                    ? "Complete Your Inquiry"
                    : "Ολοκληρώστε την Ερώτησή σας"
                  : language === "en"
                  ? "How would you like to contact us?"
                  : "Πώς θα θέλατε να επικοινωνήσετε;"}
              </DialogTitle>
              <DialogDescription className="text-center text-base mt-2">
                {language === "en" ? "Inquiring about" : "Ενδιαφέρον για"}: <span className="font-semibold text-primary">{vehicleName}</span>
              </DialogDescription>
            </DialogHeader>

            {!contactMethod ? (
              // Step 1: Choose contact method
              <div className="grid gap-4">
                {contactMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setContactMethod(method.id)}
                    className="flex items-center gap-4 p-6 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              // Step 2: Fill in details
              <div className="grid gap-5">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="w-fit -ml-2 text-muted-foreground"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === "en" ? "Back" : "Πίσω"}
                </Button>

                {/* Important Notes */}
                <div className="space-y-3">
                  <Alert className="border-primary/20 bg-primary/5">
                    <Info className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">*</span>{" "}
                      {language === "en"
                        ? "For single-day rentals, please select the same date for both pick-up and drop-off. For example, selecting 16/8 - 16/8 indicates a one-day rental, while 16/8 - 17/8 indicates a two-day rental."
                        : "Για ενοικίαση μίας ημέρας, επιλέξτε την ίδια ημερομηνία για παραλαβή και επιστροφή. Για παράδειγμα, 16/8 - 16/8 σημαίνει μία ημέρα, ενώ 16/8 - 17/8 σημαίνει δύο ημέρες."}
                    </AlertDescription>
                  </Alert>
                  <Alert className="border-primary/20 bg-primary/5">
                    <Info className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-sm">
                      <span className="font-semibold">*</span>{" "}
                      {language === "en"
                        ? "To maximize your experience, we recommend booking from the day after your arrival. If you arrive at Meganisi on August 16th, please consider booking from August 17th to enjoy a full day with your rental."
                        : "Για να αξιοποιήσετε στο έπακρο την εμπειρία σας, συνιστούμε να κάνετε κράτηση από την επόμενη ημέρα της άφιξής σας. Αν φτάσετε στο Μεγανήσι στις 16 Αυγούστου, προτείνουμε να κλείσετε από τις 17 Αυγούστου για να απολαύσετε μια ολόκληρη ημέρα."}
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Name */}
                <div className="grid gap-2">
                  <Label htmlFor="name">
                    {language === "en" ? "Your Name" : "Το Όνομά σας"} *
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={language === "en" ? "Enter your name" : "Εισάγετε το όνομά σας"}
                    className="h-12"
                  />
                </div>

                {/* Email (only for email method) */}
                {contactMethod === "email" && (
                  <div className="grid gap-2">
                    <Label htmlFor="email">
                      {language === "en" ? "Your Email" : "Το Email σας"} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={language === "en" ? "Enter your email" : "Εισάγετε το email σας"}
                      className="h-12"
                    />
                  </div>
                )}

                {/* Phone (for WhatsApp/Viber) */}
                {(contactMethod === "whatsapp" || contactMethod === "viber") && (
                  <div className="grid gap-2">
                    <Label htmlFor="phone">
                      {language === "en" ? "Your Phone Number" : "Το Τηλέφωνό σας"} *
                    </Label>
                    <div className="flex gap-2">
                      <Select value={countryCode} onValueChange={setCountryCode}>
                        <SelectTrigger className="w-[140px] h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {countryCodes.map((country) => (
                            <SelectItem key={country.code} value={country.code}>
                              <span className="flex items-center gap-2">
                                <span>{country.flag}</span>
                                <span>{country.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder={language === "en" ? "Phone number" : "Αριθμός τηλεφώνου"}
                        className="flex-1 h-12"
                      />
                    </div>
                  </div>
                )}

                {/* Pick-up Date */}
                <div className="grid gap-2">
                  <Label>
                    {language === "en" ? "Pick-up Date" : "Ημερομηνία Παραλαβής"} *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal h-12",
                          !pickupDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {pickupDate
                          ? format(pickupDate, "PPP")
                          : language === "en"
                          ? "Select date"
                          : "Επιλέξτε ημερομηνία"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Drop-off Date */}
                <div className="grid gap-2">
                  <Label>
                    {language === "en" ? "Drop-off Date" : "Ημερομηνία Επιστροφής"} *
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal h-12",
                          !dropoffDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dropoffDate
                          ? format(dropoffDate, "PPP")
                          : language === "en"
                          ? "Select date"
                          : "Επιλέξτε ημερομηνία"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dropoffDate}
                        onSelect={setDropoffDate}
                        disabled={(date) => date < (pickupDate || new Date())}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Number of People (only for boats/ribs) */}
                {showPeopleField && (
                  <div className="grid gap-2">
                    <Label htmlFor="people">
                      {language === "en" ? "Number of People" : "Αριθμός Ατόμων"}{" "}
                      <span className="text-muted-foreground text-sm">
                        ({language === "en" ? "optional" : "προαιρετικό"})
                      </span>
                    </Label>
                    <Input
                      id="people"
                      type="number"
                      min="1"
                      max="20"
                      value={numberOfPeople}
                      onChange={(e) => setNumberOfPeople(e.target.value)}
                      placeholder={language === "en" ? "e.g., 4" : "π.χ., 4"}
                      className="h-12"
                    />
                  </div>
                )}

                {/* Notes */}
                <div className="grid gap-2">
                  <Label htmlFor="notes">
                    {language === "en" ? "Additional Notes" : "Επιπλέον Σημειώσεις"}{" "}
                    <span className="text-muted-foreground text-sm">
                      ({language === "en" ? "optional" : "προαιρετικό"})
                    </span>
                  </Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={
                      language === "en"
                        ? "Any special requests or questions..."
                        : "Τυχόν ειδικά αιτήματα ή ερωτήσεις..."
                    }
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  disabled={
                    !name || 
                    !pickupDate || 
                    !dropoffDate || 
                    (contactMethod === "email" ? !email : !phoneNumber)
                  }
                  className="w-full mt-4 h-12 text-base"
                  variant="contact"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {language === "en" ? "Send Inquiry via" : "Αποστολή μέσω"}{" "}
                  {contactMethod === "email"
                    ? "Email"
                    : contactMethod === "whatsapp"
                    ? "WhatsApp"
                    : "Viber"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingInquiryDialog;
