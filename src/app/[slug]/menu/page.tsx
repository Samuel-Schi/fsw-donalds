import { redirect } from "next/navigation";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod?: string }>;
}

// O cardápio agora é exibido na própria página do restaurante.
// Mantém links antigos (/slug/menu?consumptionMethod=...) funcionando.
const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;
  redirect(
    consumptionMethod
      ? `/${slug}?consumptionMethod=${consumptionMethod}`
      : `/${slug}`,
  );
};

export default RestaurantMenuPage;
