import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { client as sanityClient } from "../lib/sanity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const AUDIENCE_OPTIONS = [
  { value: "parents", title: "Ebeveyn" },
  { value: "children", title: "Çocuk" },
  { value: "teachers", title: "Öğretmen" },
];

export default function FilterBar() {
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.getAll("categories")
  );
  const [selectedAudiences, setSelectedAudiences] = useState(
    searchParams.getAll("targetAudiences")
  );

  // URL parametre değişimlerinde state güncelle
  useEffect(() => {
    setSelectedCategories(searchParams.getAll("categories"));
    setSelectedAudiences(searchParams.getAll("targetAudiences"));
  }, [searchParams]);

  // Kategorileri Sanity'den çek
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "category"]{_id, title}`;
        const cats = await sanityClient.fetch(query);
        setCategories(cats);
      } catch (error) {
        console.error("Kategori çekme hatası:", error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  // Dropdown dışına tıklanırsa kapat
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Kategori seçimini toggle et
  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Hedef kitle seçimini toggle et
  const handleAudienceToggle = (audienceValue) => {
    setSelectedAudiences((prev) =>
      prev.includes(audienceValue)
        ? prev.filter((val) => val !== audienceValue)
        : [...prev, audienceValue]
    );
  };

  // Filtreleri uygula ve URL güncelle
  const handleApplyFilters = () => {
    const newParams = { ...Object.fromEntries(searchParams) };

    if (selectedCategories.length > 0) {
      newParams.categories = selectedCategories;
    } else {
      delete newParams.categories;
    }

    if (selectedAudiences.length > 0) {
      newParams.targetAudiences = selectedAudiences;
    } else {
      delete newParams.targetAudiences;
    }

    // search parametresi varsa koru
    const searchTerm = searchParams.get("search");
    if (searchTerm) {
      newParams.search = searchTerm;
    } else {
      delete newParams.search;
    }

    setSearchParams(newParams);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center bg-amber-400 text-white rounded-md py-1.5 px-2 cursor-pointer hover:bg-amber-500 transition duration-300"
      >
        <FontAwesomeIcon icon={faFilter} className="mr-2" />
        Filtreler
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 p-4">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Filtrele</h3>

          {/* Kategoriler */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Kategoriler</h4>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-auto">
              {categories.map((cat) => (
                <button
                  key={cat._id}
                  onClick={() => handleCategoryToggle(cat._id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
                    ${
                      selectedCategories.includes(cat._id)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Hedef Kitle */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Hedef Kitle</h4>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-auto">
              {AUDIENCE_OPTIONS.map(({ value, title }) => (
                <button
                  key={value}
                  onClick={() => handleAudienceToggle(value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap
                    ${
                      selectedAudiences.includes(value)
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                >
                  {title}
                </button>
              ))}
            </div>
          </div>

          {/* Filtrele Butonu */}
          <div className="mt-6 text-center">
            <button
              onClick={handleApplyFilters}
              className="px-6 py-2 bg-amber-500 text-white font-semibold rounded-md hover:bg-amber-600 w-full transition-colors duration-200"
            >
              Filtrele
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
