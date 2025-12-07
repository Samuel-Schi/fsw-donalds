import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products Page</h1>
      <div className="mb-4">
        <Input placeholder="Search products..." className="w-full max-w-sm" />
      </div>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">
        Add New Product
      </Button>
    </div>
  );
};
