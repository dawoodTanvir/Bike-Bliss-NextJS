import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQ() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#14121F] text-white px-4">
      {/* FAQ Section */}
      <div className="w-full max-w-xl text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-sm md:text-base text-gray-500 mb-8">
          Find the answers to the most common questions about bikes, services, and more.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {/* Question 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium text-base md:text-lg py-2 px-4 text-gray-500 hover:bg-gray-700 hover:text-white rounded-lg">
              Are they high maintenance?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-400 p-4 rounded-lg shadow-md">
              No, they are high-quality bikes designed for durability and ease of use.
            </AccordionContent>
          </AccordionItem>

          {/* Question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-medium text-base md:text-lg py-2 px-4 text-gray-500 hover:bg-gray-700 hover:text-white rounded-lg">
              What is the warranty period?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-400 p-4 rounded-lg shadow-md">
              Our bikes come with a 2-year warranty covering manufacturing defects.
            </AccordionContent>
          </AccordionItem>

          {/* Question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-medium text-base md:text-lg py-2 px-4 text-gray-500 hover:bg-gray-700 hover:text-white rounded-lg">
              Can I customize the bikes?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-base text-gray-400 p-4 rounded-lg shadow-md">
              Yes, we offer customization options for colors, accessories, and more.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Still have a question?</h1>
        <p className="text-sm md:text-base text-gray-400 mb-6">
          Support details to capture customers that might be on the fence.
        </p>
        <button className="text-white hover:text-white border border-purple-400 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm md:text-base px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default FAQ;
