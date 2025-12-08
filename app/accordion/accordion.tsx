import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="
        w-[45%] rounded-xl border border-[--border]
        bg-[--card] shadow-sm
        backdrop-blur-sm
        text-[#333]
      "
    >
      {sections.map((sec) => (
        <AccordionItem
          key={sec.value}
          value={sec.value}
          className="
            px-4 transition-colors
            data-[state=open]:bg-[--accent]/20
            rounded-xl
          "
        >
          <AccordionTrigger
            className="
              py-5 text-left text-[--foreground] font-semibold
              hover:text-[--primary] transition-colors
              flex justify-between items-center
            "
          >
            {sec.title}
          </AccordionTrigger>

          <AccordionContent
            className="
              text-[--muted-foreground] pl-1 pr-5 pb-5 pt-1
              leading-relaxed flex flex-col gap-3
              animate-in fade-in-50 slide-in-from-top-1
            "
          >
            {sec.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const sections = [
  {
    value: "item-1",
    title: "Product Information",
    content: [
      "Our flagship product combines cutting-edge technology with sleek design.",
      "Key features include advanced processing capabilities and an intuitive UI."
    ]
  },
  {
    value: "item-2",
    title: "Shipping Details",
    content: [
      "We offer worldwide shipping through trusted courier partners.",
      "Track your shipment in real-time through our portal."
    ]
  },
  {
    value: "item-3",
    title: "Return Policy",
    content: [
      "Comprehensive 30-day return policy.",
      "Free return shipping and fast refunds."
    ]
  }
];
