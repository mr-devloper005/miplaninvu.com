import Link from 'next/link'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Building2, Search, Phone, MapPin, Star, ShieldCheck } from 'lucide-react'

const topics = [
  { 
    title: 'Browse Listings', 
    description: 'Search and filter the directory—verified-style listings with categories, summaries, and details.',
    icon: Search 
  },
  { 
    title: 'Business Profiles', 
    description: 'View complete business information including location, contact details, and services offered.',
    icon: Building2 
  },
  { 
    title: 'Contact & Visit', 
    description: 'Get in touch with businesses directly using provided contact information and maps.',
    icon: Phone 
  },
  { 
    title: 'Local Discovery', 
    description: 'Find top-rated businesses and services in your area with trusted reviews.',
    icon: MapPin 
  },
];

const faqs = [
  {
    id: '1',
    question: 'How do I search for businesses?',
    answer: 'Use the search bar on the homepage to find businesses by name, category, or location. You can also browse categories directly from the listings page.'
  },
  {
    id: '2',
    question: 'Are the listings verified?',
    answer: 'Yes, we maintain a trusted directory with verified business profiles. Each listing includes detailed information to help you make informed decisions.'
  },
  {
    id: '3',
    question: 'How do I contact a business?',
    answer: 'Each business listing includes contact information such as phone numbers, addresses, and websites. You can reach out directly using the provided details.'
  },
  {
    id: '4',
    question: 'Can I add my business to the directory?',
    answer: 'Yes, you can create an account and add your business listing. This allows you to manage your business information and connect with potential customers.'
  },
  {
    id: '5',
    question: 'Is the service free to use?',
    answer: 'Browsing and searching the directory is free for all users. Business owners can create enhanced listings with additional features.'
  }
];

export default function HelpPage() {
  return (
    <PageShell
      title="Help Center"
      description="Find answers about browsing listings, business profiles, and using the directory."
      actions={
        <Button asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      }
    >
      <div className="space-y-8">
        <Card className="border-border bg-card">
          <CardContent className="space-y-6 p-6">
            <h2 className="text-2xl font-semibold text-foreground">How to Use the Directory</h2>
            <p className="text-sm text-muted-foreground">
              Our directory is designed to help you find and connect with trusted local businesses. 
              Use the search function to discover businesses by category, location, or specific needs.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Card key={topic.title} className="border-border bg-card transition-transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <Icon className="h-6 w-6 text-primary mb-3" />
                  <h2 className="text-lg font-semibold text-foreground">{topic.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardContent className="space-y-4 p-6">
            <h3 className="text-lg font-semibold text-foreground">Need More Help?</h3>
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for? Our support team is here to help you with any questions about using the directory or finding businesses.
            </p>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/listings">Browse Listings</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageShell>
  )
}
