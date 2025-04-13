import RootLayout from "@/layouts/RootLayout";
import TemplatesCarouselExpenses from "@/components/templates/PagesCarousel /CarouselExpenses/Index";

export default function gastos() {
  return (
    <RootLayout>
      <article>
        <TemplatesCarouselExpenses />
      </article>
    </RootLayout>
  );
}
