import {
    Users,
    FileText,
    ShieldAlert,
    BarChart3,
    Settings2,
    Briefcase,
    UserCheck,
    MessageCircle,
    Star,
  } from "lucide-react";
  
  const dashboardAdminRoutes = {
    user: {
      name: "Admin",
      email: "admin@example.com",
      avatar: "/avatars/admin.jpg",
    },
    teams: [
      {
        name: "Admin Panel",
        logo: ShieldAlert,
        plan: "Enterprise",
      },
    ],
    navMain: [
      {
        title: "Tableau de Bord",
        url: "/dashboard",
        icon: Users,
        isActive: true,
        items: [],
      },
      {
        title: "Gestion des utilisateurs",
        url: "/admin/user-management",
        icon: FileText,
        items: [
          {
            title: "Tous les utilisateurs",
            url: "/admin/user-management/all",
          },
          {
            title: "Ajouter un utilisateur",
            url: "/admin/user-management/add",
          },
        ],
      },
      {
        title: "Gestion des Contenus",
        url: "/gestion-comptes",
        icon: FileText,
        items: [
          {
            title: "Modérer les annonces",
            url: "/gestion-comptes/annonces",
          },
          {
            title: "Modérer les avis",
            url: "/gestion-comptes/avis",
          },
        ],
      },
      {
        title: "Analyses et Rapports",
        url: "/analyses-rapports",
        icon: BarChart3,
        items: [
          {
            title: "Statistiques d’utilisation",
            url: "/analyses-rapports/statistiques",
          },
          {
            title: "Tendances des retours clients",
            url: "/analyses-rapports/tendances",
          },
        ],
      },
      {
        title: "Paramètres",
        url: "/settings",
        icon: Settings2,
        items: [
          {
            title: "Général",
            url: "/settings/general",
          },
          {
            title: "Sécurité",
            url: "/settings/security",
          },
        ],
      },
    ],
  };
  
  const dashboardWorkerRoutes = {
    user: {
      name: "Travailleur",
      email: "worker@example.com",
      avatar: "/avatars/worker.jpg",
    },
    navMain: [
      {
        title: "Profil",
        url: "/worker/profile",
        icon: UserCheck,
        items: [],
      },
      {
        title: "Gestion des Annonces",
        url: "/worker/annonces",
        icon: Briefcase,
        items: [
          {
            title: "Créer une annonce",
            url: "/worker/annonces/create",
          },
          {
            title: "Mes annonces",
            url: "/worker/annonces/my",
          },
        ],
      },
      {
        title: "Avis et Notations",
        url: "/worker/feedback",
        icon: Star,
        items: [],
      },
    ],
  };
  
  const dashboardClientRoutes = {
    user: {
      name: "Client",
      email: "client@example.com",
      avatar: "/avatars/client.jpg",
    },
    navMain: [
      {
        title: "Mon Profil",
        url: "/client/profile",
        icon: UserCheck,
        items: [],
      },
      {
        title: "Rechercher des Services",
        url: "/client/search",
        icon: Briefcase,
        items: [],
      },
      {
        title: "Messages",
        url: "/client/messages",
        icon: MessageCircle,
        items: [],
      },
      {
        title: "Mes Avis",
        url: "/client/feedback",
        icon: Star,
        items: [],
      },
    ],
  };
  
  export { dashboardAdminRoutes, dashboardWorkerRoutes, dashboardClientRoutes };
  