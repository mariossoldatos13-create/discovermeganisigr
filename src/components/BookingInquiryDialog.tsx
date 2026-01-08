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
import { Mail, MessageCircle, Phone, CalendarIcon, ArrowLeft, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type ContactMethod = "email" | "whatsapp" | "viber" | null;
type VehicleType = "boat" | "rib" | "land";

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
  const [pickupDate, setPickupDate] = useState<Date>();
  const [dropoffDate, setDropoffDate] = useState<Date>();
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [notes, setNotes] = useState("");

  const showPeopleField = vehicleType === "boat" || vehicleType === "rib";

  const resetForm = () => {
    setContactMethod(null);
    setName("");
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {contactMethod
              ? language === "en"
                ? "Complete Your Inquiry"
                : "Ολοκληρώστε την Ερώτησή σας"
              : language === "en"
              ? "How would you like to contact us?"
              : "Πώς θα θέλατε να επικοινωνήσετε;"}
          </DialogTitle>
          <DialogDescription>
            {language === "en" ? "Inquiring about" : "Ενδιαφέρον για"}: <span className="font-semibold text-primary">{vehicleName}</span>
          </DialogDescription>
        </DialogHeader>

        {!contactMethod ? (
          // Step 1: Choose contact method
          <div className="grid gap-4 py-4">
            {contactMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => setContactMethod(method.id)}
                className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <method.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{method.title}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          // Step 2: Fill in details
          <div className="grid gap-4 py-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              className="w-fit -ml-2 text-muted-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back" : "Πίσω"}
            </Button>

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
              />
            </div>

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
                      "justify-start text-left font-normal",
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
                      "justify-start text-left font-normal",
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
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={!name || !pickupDate || !dropoffDate}
              className="w-full mt-2"
              variant="contact"
            >
              <Send className="w-4 h-4 mr-2" />
              {language === "en" ? "Send Inquiry via" : "Αποστολή μέσω"}{" "}
              {contactMethod === "email"
                ? "Email"
                : contactMethod === "whatsapp"
                ? "WhatsApp"
                : "Viber"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingInquiryDialog;
