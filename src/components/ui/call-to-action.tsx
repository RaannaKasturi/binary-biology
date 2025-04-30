import { MailIcon, PhoneCallIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

function CTA() {
  return (
    <div className="w-full">
      <div className="flex justify-center mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-6 lg:p-10 md:w-10/12 lg:w-8/12 gap-6 items-center">
          <div>
            <Badge>Contact Us</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Still got Questions?
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Managing a business today is already tough. We know. Let us help
              you with your questions. Send us a mail and let&apos;s schedule a call.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <Link href={"mailto:contact@binarybiology.top"} target="_blank" rel="nofollow noreferrer">
              <Button className="gap-4">
                Send Mail <MailIcon className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={"tel:+918104594459"} target="_blank" rel="nofollow noreferrer">
              <Button className="gap-4">
                Call Us <PhoneCallIcon className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={"https://api.whatsapp.com/send?phone=918104594459&text=Hello%20Binary%20Biology%2C%0AI%27m%20interested%20in%20one%20of%20the%20service%20you%20provide%20or%20have%20some%20query%20about%20it."} target="_blank" rel="nofollow noreferrer">
              <Button className="gap-4">
                WhatsApp Us <FaWhatsapp className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
