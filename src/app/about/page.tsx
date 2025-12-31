
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-4 px-6 border-b">
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Us</h1>
          <div className="prose prose-lg text-muted-foreground space-y-4">
            <p>
              Welcome to Atithi Family Restaurant. Our story begins with a passion for authentic Indian cuisine and a dream to create a dining experience that feels like home. We believe that food is not just about sustenance, but about community, culture, and creating memories.
            </p>
            <p>
              Our mission is to offer our guests a taste of India's rich culinary heritage, prepared with the freshest ingredients and a lot of love. From our flavorful curries to our tandoori specialties, every dish is crafted to provide a delightful and memorable experience.
            </p>
            <h2 className="text-2xl font-semibold text-foreground pt-4">Our Philosophy</h2>
            <p>
              We are committed to quality and hygiene. We source our ingredients from trusted local suppliers to ensure freshness and flavor. Our kitchen operates with the highest standards of cleanliness because we believe our guests deserve the best.
            </p>
            <p>
              Whether you are a family on a road trip, a professional looking for a quality meal, or a traveler seeking comfort, Atithi is your destination. We look forward to welcoming you.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
