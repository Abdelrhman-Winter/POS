import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
interface ImageComponentProps {
  src: string | StaticImport;
  alt: string;
  loading: "eager" | "lazy";
  className?: string; // Optional className if needed
}
export default function ImageComponent({
  src,
  alt,
  loading,
  className,
}: ImageComponentProps) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={500}
      height={500}
      loading={loading}
      priority
    />
  );
}
