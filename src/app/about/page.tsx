import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/site-config";
import { siteContent } from "@/config/site.content";

const features = [
  { 
    title: "Trusted Directory", 
    description: "The directory focuses on business listings first—so owners get a proper profile and visitors get the facts they need in seconds." 
  },
  { 
    title: "Built for Scanning", 
    description: "Whether you are choosing a service, a place to visit, or a brand to trust, the site keeps scanning fast and details easy to compare." 
  },
  { 
    title: "Clear Navigation", 
    description: "This is the public home of the directory experience: structured listings, consistent cards, and navigation that stays out of your way." 
  },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} is a top-rated listing site for discovering verified businesses, services, and local spots.`}
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/listings">Browse Listings</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </>
      }
    >
      <div className="space-y-8">
        <Card className="border-border bg-card">
          <CardContent className="space-y-6 p-6">
            <Badge variant="secondary">About the directory</Badge>
            <h2 className="text-3xl font-semibold text-foreground">
              The listing directory built for people who want clarity, not clutter.
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                {SITE_CONFIG.name} focuses on business listings first—so owners get a proper profile and visitors get the facts they need in seconds.
              </p>
              <p>
                Whether you are choosing a service, a place to visit, or a brand to trust, the site keeps scanning fast and details easy to compare.
              </p>
              <p>
                This is the public home of the directory experience: structured listings, consistent cards, and navigation that stays out of your way.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <Badge variant="secondary">At a glance</Badge>
            <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Top-rated listing presentation with strong trust and location cues.</li>
              <li>• Category-friendly browsing aligned with how people search locally.</li>
              <li>• Built for mobile scanning and quick jumps to contact or map info.</li>
              <li>• A focused alternative to noisy social feeds and generic search results.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
