import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/container";
import Filter from "./category/[categoryId]/components/filter";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";
import getCategory from "@/actions/get-category";
import getCategories from "@/actions/get-categories";

// export const revalidate = 0;

interface HomePageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const HomePage: React.FC<HomePageProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    isFeatured: true,
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const categories = await getCategories();
  const category = await getCategory(params.categoryId);
  const billboard = await getBillboard("58c5e8dc-1bf5-4e35-be0c-a505c3b1b3a1");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          <Filter valueKey="colorId" name="Colors" data={colors} />
          <Filter valueKey="categoryId" name="Category" data={categories} />
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
