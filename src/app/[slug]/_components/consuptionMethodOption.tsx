import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsuptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ConsuptionMethodOptionProps {
  imageURL: string;
  alt: string;
  textButton: string;
  option: ConsuptionMethod;
  slug: string;
}

const ConsuptionMethodOption = ({
  imageURL,
  alt,
  textButton,
  option,
  slug,
}: ConsuptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image src={imageURL} alt={alt} fill className="object-contain" />
        </div>

        <Button variant={"secondary"} className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consuptionMethod=${option}`}>
            {textButton}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsuptionMethodOption;
