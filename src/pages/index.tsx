import RootLayout from "@/layouts/RootLayout";
import TemplatesPagesCarousel from "@/components/templates/PagesCarousel /Index";

export default function Home() {
  return (
    <RootLayout>
      <article>
        <TemplatesPagesCarousel />
      </article>
    </RootLayout>
  );
}
