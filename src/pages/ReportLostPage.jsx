import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Select from "../components/Select";
import Button from "../components/Button";
import { itemCategories } from "../data/mockData";

function ReportLostPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    color: "",
    location: "",
    lostDate: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.color.trim()) {
      newErrors.color = "Color is required";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.lostDate) {
      newErrors.lostDate = "Lost date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const saveLostItemToLocalStorage = () => {
    const oldItems = JSON.parse(localStorage.getItem("findback_lost_items") || "[]");

    const newItem = {
      id: Date.now(),
      ...formData,
      imageUrl:
        formData.imageUrl ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      status: "OPEN",
      reportedBy: "Normal User",
      createdAt: new Date().toISOString(),
    };

    const updatedItems = [newItem, ...oldItems];

    localStorage.setItem("findback_lost_items", JSON.stringify(updatedItems));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    saveLostItemToLocalStorage();

    toast.success("Lost item reported successfully");
    navigate("/lost-items");
  };

  return (
    <MainLayout>
      <section className="mb-6">
        <p className="text-sm font-medium text-blue-600">Lost report</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Report Lost Item
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Add clear details so the system can compare your lost item with found
          item reports.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <Input
              label="Item Title"
              type="text"
              name="title"
              placeholder="Example: Black Wallet"
              value={formData.title}
              onChange={handleChange}
              error={errors.title}
            />
          </div>

          <div className="md:col-span-2">
            <Textarea
              label="Description"
              name="description"
              placeholder="Describe the item, marks, brand, or anything unique"
              value={formData.description}
              onChange={handleChange}
              error={errors.description}
            />
          </div>

          <Select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            error={errors.category}
          >
            <option value="">Select category</option>
            {itemCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Select>

          <Input
            label="Color"
            type="text"
            name="color"
            placeholder="Example: Black"
            value={formData.color}
            onChange={handleChange}
            error={errors.color}
          />

          <Input
            label="Last Seen Location"
            type="text"
            name="location"
            placeholder="Example: Library"
            value={formData.location}
            onChange={handleChange}
            error={errors.location}
          />

          <Input
            label="Lost Date"
            type="date"
            name="lostDate"
            value={formData.lostDate}
            onChange={handleChange}
            error={errors.lostDate}
          />

          <div className="md:col-span-2">
            <Input
              label="Image URL Optional"
              type="url"
              name="imageUrl"
              placeholder="Paste image URL or leave empty"
              value={formData.imageUrl}
              onChange={handleChange}
              error={errors.imageUrl}
            />
          </div>

          <div className="flex gap-3 md:col-span-2">
            <Button type="submit" className="md:w-auto">
              Submit Lost Report
            </Button>

            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}

export default ReportLostPage;