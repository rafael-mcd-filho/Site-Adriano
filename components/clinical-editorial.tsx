import Link from "next/link";
import { contentLastReviewed } from "@/lib/content";
import { clinicalReviews } from "@/lib/editorial";
import { siteConfig } from "@/lib/site";
import styles from "./clinical-editorial.module.css";

export function ClinicalEditorial({ slug, updatedAt = contentLastReviewed }: { slug: string; updatedAt?: string }) {
  const review = clinicalReviews[slug];
  const date = review?.date ?? updatedAt;
  const displayDate = date.split("-").reverse().join("/");
  return (
    <p className={styles.editorial}>
      <span>{review ? "Conteúdo revisado por " : "Informações clínicas · "}
        <Link href="/sobre#formacao">{siteConfig.fullName}</Link>
      </span>
      <span>{siteConfig.registry}</span>
      <span>{review ? "Revisão clínica em " : "Atualização editorial em "}<time dateTime={date}>{displayDate}</time></span>
    </p>
  );
}
