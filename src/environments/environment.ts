// Development environment values.
// IMPORTANT: Do NOT commit real secrets. Replace these placeholders
// locally or provide values at build time (CI secrets, Angular file replacements,
// or a non-committed `environment.local.ts`).
export const environment = {
  production: false,

  // Email / Mail provider (server-side recommended)
  emailFromName: 'Pura Vida Yachts',
  mailtrapApiToken: 're_Qdue6ykn_ALBLDwHpcgPyn3TJdzhmKTAZ',
  brevoApiKey: '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',
  brevoSenderEmail: 'maudanlol@gmail.com',
  brevoSenderName: 'Pura Vida Yachts',

  // Supabase (anon key is ok for client-side usage for public operations)
  supabaseUrl: 'https://frvoyitavbsatkeqkdol.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZydm95aXRhdmJzYXRrZXFrZG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyOTc0NTEsImV4cCI6MjA5Njg3MzQ1MX0.JA_JBCL8SdWuce2o1DoSwmU0AAJlHdqYoIIP3I-Q10M',
};
