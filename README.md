# Atelier CKM - dossier de déploiement Vercel

Contenu : index.html (l'application complète), api/config.js (expose les clés Supabase au navigateur), vercel.json, supabase-schema.sql (à exécuter une fois dans Supabase > SQL Editor).

Déploiement, deux voies :
1. GitHub : créer un dépôt, y déposer ces fichiers (glisser-déposer sur github.com), puis relier le dépôt à Vercel (Add New > Project > Import).
2. CLI : dans ce dossier, `npx vercel --prod` (compte Vercel Elliacare).

Ensuite : Storage > Create Database > Supabase, exécuter le SQL, redéployer. Voir GUIDE_deploiement_Vercel_Supabase.md.
