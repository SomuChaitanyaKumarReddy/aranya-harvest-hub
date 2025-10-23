import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Aranya Krishi provide?",
    answer: "We offer comprehensive agricultural services including organic farming solutions, irrigation system installation, farm management, agricultural consulting, plant nursery services, training programs, crop protection, and supply chain support.",
  },
  {
    question: "How can organic farming increase my profits?",
    answer: "Organic farming reduces input costs by eliminating expensive chemical fertilizers and pesticides. Additionally, organic produce commands premium prices in the market, often 20-50% higher than conventional produce, leading to better profit margins.",
  },
  {
    question: "What is the initial investment required?",
    answer: "Investment varies based on land size and chosen services. For basic consultation and organic farming setup on 1-2 acres, expect ₹50,000-1,00,000. We offer customized packages and can help you plan based on your budget.",
  },
  {
    question: "Do you provide training for new farmers?",
    answer: "Yes, we conduct regular workshops, hands-on training sessions, and field demonstrations. We also offer online courses and certification programs for those who want to learn modern sustainable farming techniques.",
  },
  {
    question: "How long does it take to see results from organic farming?",
    answer: "Initial soil improvement takes 1-2 seasons. Most farmers see noticeable improvements in soil health and crop quality within 6-12 months. Full benefits and optimal yields typically manifest after 2-3 years of consistent organic practices.",
  },
  {
    question: "What is the timeline for teakwood plantation returns?",
    answer: "Teakwood is a long-term investment. First thinning revenue comes after 5-7 years, second thinning at 12-15 years, and optimal harvest at 20-25 years. Expected returns are 12-15% annually over the full cycle.",
  },
  {
    question: "Do you help with market linkages for produce?",
    answer: "Yes, we provide comprehensive supply chain support including connections to organic produce markets, help with pricing negotiations, transport coordination, and storage solutions. We work with retailers, exporters, and direct consumer channels.",
  },
  {
    question: "What kind of ongoing support do you provide?",
    answer: "We offer continuous support through regular farm visits, phone consultations, troubleshooting assistance, seasonal planning guidance, and access to our expert team. Most packages include at least quarterly check-ins.",
  },
  {
    question: "Can you help convert existing conventional farms to organic?",
    answer: "Absolutely. We specialize in organic transition planning, which typically takes 2-3 years. We guide you through soil restoration, natural pest management implementation, and certification processes while ensuring minimal revenue disruption.",
  },
  {
    question: "What regions do you serve?",
    answer: "We currently operate across multiple regions including rural districts, hill regions, coastal areas, and urban outskirts. Contact us to discuss service availability in your specific location.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Everything you need to know about our services
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold text-card-foreground pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-16 text-center p-8 bg-muted/30 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Still have questions?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help. Reach out to us for personalized assistance.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
