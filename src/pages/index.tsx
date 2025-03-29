import RootLayout from "@/layouts/RootLayout";
import OrganismsPagesCarousel from "@/components/organisms/PagesCarousel /Index";

export default function Home() {
  return (
    <RootLayout>
      <article>
        <OrganismsPagesCarousel />
      </article>
    </RootLayout>
  );
}
