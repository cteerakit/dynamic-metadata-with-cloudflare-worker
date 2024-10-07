export const config = {
  domainSource: "https://www.telepath.work", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/companies/[^/]+",
          metaDataEndpoint: "https://mzthkqrxpvcmyhbaydls.supabase.co/rest/v1/company_meta?id=eq.{id}&select=title,description,image,keywords&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16dGhrcXJ4cHZjbXloYmF5ZGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMjg2NDgsImV4cCI6MjAyMjgwNDY0OH0.FcXziCUfckCC0520HRZLjDzjwSqpLqTIJd5D6qn3qIU"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
