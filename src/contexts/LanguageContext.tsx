import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "el";

interface Translations {
  [key: string]: {
    en: string;
    el: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", el: "Αρχική" },
  "nav.about": { en: "About", el: "Σχετικά" },
  "nav.boats": { en: "Boats", el: "Σκάφη" },
  "nav.ribs": { en: "RIBs", el: "Φουσκωτά" },
  "nav.cruises": { en: "Cruises", el: "Κρουαζιέρες" },
  "nav.landAdventures": { en: "Land Adventures", el: "Περιπέτειες Ξηράς" },
  "nav.contact": { en: "Contact", el: "Επικοινωνία" },
  "nav.bookNow": { en: "Book Now", el: "Κράτηση" },
  "nav.menu": { en: "Menu", el: "Μενού" },
  
  // Hero
  "hero.subtitle": { en: "Discover Meganisi", el: "Ανακαλύψτε το Μεγανήσι" },
  "hero.title": { en: "Your Greek Island Adventure Awaits", el: "Η Ελληνική Νησιωτική Περιπέτειά σας Περιμένει" },
  "hero.description": { en: "Explore the crystal-clear waters and hidden coves of Meganisi with our premium boat rentals, guided cruises, and land adventures.", el: "Εξερευνήστε τα κρυστάλλινα νερά και τους κρυφούς κόλπους του Μεγανησίου με τις premium ενοικιάσεις σκαφών, τις κρουαζιέρες και τις περιπέτειες ξηράς." },
  
  // Fleet Section
  "fleet.subtitle": { en: "Our Fleet", el: "Ο Στόλος μας" },
  "fleet.title": { en: "Choose Your Adventure", el: "Επιλέξτε την Περιπέτειά σας" },
  "fleet.description": { en: "Whether you prefer the freedom of the open sea or the thrill of the mountain roads, we have the perfect vehicle for your Meganisi adventure.", el: "Είτε προτιμάτε την ελευθερία της θάλασσας είτε τη συγκίνηση των ορεινών δρόμων, έχουμε το τέλειο όχημα για την περιπέτειά σας στο Μεγανήσι." },
  "fleet.boats": { en: "Boats", el: "Σκάφη" },
  "fleet.boats.subtitle": { en: "Explore by Sea", el: "Εξερευνήστε τη Θάλασσα" },
  "fleet.boats.description": { en: "From easy-to-handle 30HP boats requiring no license to powerful 115HP vessels for island hopping.", el: "Από εύχρηστα σκάφη 30HP χωρίς δίπλωμα μέχρι ισχυρά σκάφη 115HP για εξερεύνηση νησιών." },
  "fleet.ribs": { en: "RIBs", el: "Φουσκωτά" },
  "fleet.ribs.subtitle": { en: "High Performance", el: "Υψηλές Επιδόσεις" },
  "fleet.ribs.description": { en: "Powerful 250HP RIBs for the ultimate island hopping experience to Ithaca, Atokos, and beyond.", el: "Ισχυρά φουσκωτά 250HP για την απόλυτη εμπειρία εξερεύνησης νησιών στην Ιθάκη, τον Άτοκο και πέρα." },
  "fleet.cruises": { en: "Cruises", el: "Κρουαζιέρες" },
  "fleet.cruises.subtitle": { en: "Island Hopping", el: "Νησιωτικές Διαδρομές" },
  "fleet.cruises.description": { en: "Discover the magic of the Ionian islands. From the hidden beaches of Meganisi to the mythical shores of Ithaca.", el: "Ανακαλύψτε τη μαγεία των Ιονίων νησιών. Από τις κρυφές παραλίες του Μεγανησίου μέχρι τις μυθικές ακτές της Ιθάκης." },
  "fleet.landAdventures": { en: "Land Adventures", el: "Περιπέτειες Ξηράς" },
  "fleet.landAdventures.subtitle": { en: "Explore by Land", el: "Εξερευνήστε τη Ξηρά" },
  "fleet.landAdventures.description": { en: "Navigate the charming villages with our scooters and e-bikes, or take the road less traveled with our powerful ATV.", el: "Περιηγηθείτε στα γραφικά χωριά με τα σκούτερ και τα ηλεκτρικά ποδήλατα μας, ή ακολουθήστε τον δρόμο λιγότερο ταξιδεμένο με το ισχυρό ATV μας." },
  
  // About Section
  "about.subtitle": { en: "Why Meganisi?", el: "Γιατί Μεγανήσι;" },
  "about.title": { en: "Discover Paradise", el: "Ανακαλύψτε τον Παράδεισο" },
  "about.description": { en: "Meganisi is a hidden gem in the Ionian Sea, offering pristine beaches, crystal-clear waters, and authentic Greek hospitality away from the crowds.", el: "Το Μεγανήσι είναι ένα κρυφό διαμάντι στο Ιόνιο Πέλαγος, προσφέροντας παρθένες παραλίες, κρυστάλλινα νερά και αυθεντική ελληνική φιλοξενία μακριά από τα πλήθη." },
  "about.crystalWaters": { en: "Crystal Clear Waters", el: "Κρυστάλλινα Νερά" },
  "about.crystalWaters.desc": { en: "Swim in the clearest turquoise waters of the Mediterranean, perfect for snorkeling and diving.", el: "Κολυμπήστε στα πιο καθαρά τιρκουάζ νερά της Μεσογείου, ιδανικά για κολύμβηση με αναπνευστήρα και κατάδυση." },
  "about.peace": { en: "Peace & Tranquility", el: "Ηρεμία & Γαλήνη" },
  "about.peace.desc": { en: "Escape the tourist crowds and discover authentic Greece in this peaceful island paradise.", el: "Ξεφύγετε από τα τουριστικά πλήθη και ανακαλύψτε την αυθεντική Ελλάδα σε αυτόν τον ήρεμο νησιωτικό παράδεισο." },
  "about.landscapes": { en: "Scenic Landscapes", el: "Γραφικά Τοπία" },
  "about.landscapes.desc": { en: "From dramatic cliffs to hidden coves, every corner of Meganisi offers breathtaking views.", el: "Από εντυπωσιακούς βράχους μέχρι κρυφούς κόλπους, κάθε γωνιά του Μεγανησίου προσφέρει εκπληκτική θέα." },
  "about.hospitality": { en: "Warm Hospitality", el: "Θερμή Φιλοξενία" },
  "about.hospitality.desc": { en: "Experience genuine Greek warmth in charming villages where locals welcome you like family.", el: "Ζήστε τη γνήσια ελληνική ζεστασιά σε γραφικά χωριά όπου οι ντόπιοι σας υποδέχονται σαν οικογένεια." },
  
  // Boats Page
  "boats.subtitle": { en: "Our Boat Fleet", el: "Ο Στόλος Σκαφών μας" },
  "boats.title": { en: "Explore by Sea", el: "Εξερευνήστε τη Θάλασσα" },
  "boats.description": { en: "From easy-to-handle boats for beginners to powerful vessels for island hopping adventures. All boats available from 9:00 AM to 6:00 PM.", el: "Από εύχρηστα σκάφη για αρχάριους μέχρι ισχυρά σκάφη για εξερεύνηση νησιών. Όλα τα σκάφη διαθέσιμα από 9:00 πμ έως 6:00 μμ." },
  "boats.skipperTitle": { en: "Professional Skipper Service", el: "Επαγγελματική Υπηρεσία Καπετάνιου" },
  "boats.skipperDesc": { en: "Don't have a boating license? No problem! We offer experienced local skippers who know every hidden cove, the best swimming spots, and the perfect places for lunch.", el: "Δεν έχετε δίπλωμα σκάφους; Κανένα πρόβλημα! Προσφέρουμε έμπειρους τοπικούς καπετάνιους που γνωρίζουν κάθε κρυφό κόλπο, τα καλύτερα σημεία για κολύμπι και τα τέλεια μέρη για μεσημεριανό." },
  "boats.skipperNote": { en: "Skipper service available for an additional fee.", el: "Η υπηρεσία καπετάνιου διατίθεται με επιπλέον χρέωση." },
  "boats.inquire": { en: "Inquire About", el: "Ρωτήστε για" },
  "boats.noLicense": { en: "No License", el: "Χωρίς Δίπλωμα" },
  "boats.upTo": { en: "Up to", el: "Έως" },
  "boats.passengers": { en: "passengers", el: "επιβάτες" },
  "boats.required": { en: "required", el: "απαιτείται" },
  
  // RIBs Page
  "ribs.subtitle": { en: "RIB Fleet", el: "Στόλος Φουσκωτών" },
  "ribs.title": { en: "High Performance RIBs", el: "Φουσκωτά Υψηλών Επιδόσεων" },
  "ribs.description": { en: "Our powerful 250HP RIBs open up the entire Ionian Sea. Visit Ithaca, Atokos, and explore distant islands in speed and comfort.", el: "Τα ισχυρά μας φουσκωτά 250HP ανοίγουν ολόκληρο το Ιόνιο Πέλαγος. Επισκεφθείτε την Ιθάκη, τον Άτοκο και εξερευνήστε μακρινά νησιά με ταχύτητα και άνεση." },
  
  // Contact
  "contact.subtitle": { en: "Get in Touch", el: "Επικοινωνήστε μαζί μας" },
  "contact.title": { en: "Book Your Adventure", el: "Κλείστε την Περιπέτειά σας" },
  "contact.name": { en: "Name", el: "Όνομα" },
  "contact.email": { en: "Email", el: "Email" },
  "contact.phone": { en: "Phone", el: "Τηλέφωνο" },
  "contact.message": { en: "Message", el: "Μήνυμα" },
  "contact.send": { en: "Send Message", el: "Αποστολή Μηνύματος" },
  
  // Common
  "common.view": { en: "View", el: "Δείτε" },
  "common.vessels": { en: "vessels", el: "σκάφη" },
  "common.destinations": { en: "destinations", el: "προορισμοί" },
  "common.vehicles": { en: "vehicles", el: "οχήματα" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
