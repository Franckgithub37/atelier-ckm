// Expose au navigateur l'URL publique et la clé anonyme Supabase, injectées par le Marketplace Vercel.
module.exports = (req, res) => {
  const env = process.env;
  const url = env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || null;
  const key = env.SUPABASE_ANON_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY || env.SUPABASE_PUBLISHABLE_KEY || env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || null;
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ url, key, configured: Boolean(url && key) });
};
