  // Sample data that would typically come from your CMS or API
  const contactData = {
    address: {
      street: "123 Rue de la République",
      city: "Paris",
      postalCode: "75001",
      country: "France",
    },
    phone: "+33 1 23 45 67 89",
    email: "contact@servicepro.com",
    subjects: [
      { value: "general", label: "General Inquiry" },
      { value: "support", label: "Support Technique" },
      { value: "sales", label: "Demande Commerciale" },
      { value: "partnership", label: "Partenariat" },
      { value: "other", label: "Autre" },
    ],
    socialMedia: {
      facebook: "https://facebook.com/servicepro",
      twitter: "https://twitter.com/servicepro",
      linkedin: "https://linkedin.com/company/servicepro",
      instagram: "https://instagram.com/servicepro",
    },
    faqs: [
      {
        question: "Comment réserver un professionnel ?",
        answer:
          "Pour réserver un professionnel, vous pouvez utiliser notre formulaire de réservation en ligne ou nous contacter directement par téléphone. Sélectionnez le service souhaité, choisissez une date et une heure qui vous conviennent, et confirmez votre réservation.",
      },
      {
        question: "Comment sont traités les paiements ?",
        answer:
          "Nous acceptons plusieurs méthodes de paiement, notamment les cartes de crédit, les virements bancaires et PayPal. Tous les paiements sont sécurisés et cryptés. Vous recevrez une facture détaillée par email après chaque transaction.",
      },
      {
        question: "Quelle est la politique d'annulation ?",
        answer:
          "Vous pouvez annuler ou modifier votre réservation jusqu'à 48 heures avant le rendez-vous sans frais. Pour les annulations effectuées moins de 48 heures à l'avance, des frais d'annulation de 50% peuvent s'appliquer. Veuillez nous contacter dès que possible si vous devez modifier votre réservation.",
      },
    ],
  }

  export {contactData};