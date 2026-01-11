import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Mail, MessageCircle, Phone } from "lucide-react";

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
}: BookingInquiryDialogProps) => {
  const { language } = useLanguage();

  const businessPhone = "306972381929";
  const businessEmail = "info@discovermeganisi.gr";

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      language === "en" 
        ? `Inquiry about ${vehicleName}` 
        : `Ενδιαφέρον για ${vehicleName}`
    );
    window.open(`mailto:${businessEmail}?subject=${subject}`, "_blank");
    onOpenChange(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      language === "en" 
        ? `Hello! I'm interested in ${vehicleName}` 
        : `Γεια σας! Ενδιαφέρομαι για ${vehicleName}`
    );
    window.open(`https://wa.me/${businessPhone}?text=${message}`, "_blank");
    onOpenChange(false);
  };

  const handleViberClick = () => {
    const message = encodeURIComponent(
      language === "en" 
        ? `Hello! I'm interested in ${vehicleName}` 
        : `Γεια σας! Ενδιαφέρομαι για ${vehicleName}`
    );
    window.open(`viber://chat?number=%2B${businessPhone}&text=${message}`, "_blank");
    onOpenChange(false);
  };

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: language === "en" ? "Email" : "Email",
      description: language === "en" ? "Send us an email" : "Στείλτε μας email",
      onClick: handleEmailClick,
      color: "bg-primary/10 group-hover:bg-primary/20",
      iconColor: "text-primary",
    },
    {
      id: "whatsapp",
      icon: MessageCircle,
      title: "WhatsApp",
      description: language === "en" ? "Message us on WhatsApp" : "Στείλτε μήνυμα στο WhatsApp",
      onClick: handleWhatsAppClick,
      color: "bg-green-500/10 group-hover:bg-green-500/20",
      iconColor: "text-green-600",
    },
    {
      id: "viber",
      icon: Phone,
      title: "Viber",
      description: language === "en" ? "Contact us via Viber" : "Επικοινωνήστε μέσω Viber",
      onClick: handleViberClick,
      color: "bg-purple-500/10 group-hover:bg-purple-500/20",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="mb-4">
          <DialogTitle className="font-display text-xl sm:text-2xl text-center">
            {language === "en"
              ? "How would you like to contact us?"
              : "Πώς θα θέλατε να επικοινωνήσετε;"}
          </DialogTitle>
          <DialogDescription className="text-center text-base mt-2">
            {language === "en" ? "Inquiring about" : "Ενδιαφέρον για"}:{" "}
            <span className="font-semibold text-primary">{vehicleName}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={method.onClick}
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left group"
            >
              <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center transition-colors`}>
                <method.icon className={`w-6 h-6 ${method.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold text-base text-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingInquiryDialog;
