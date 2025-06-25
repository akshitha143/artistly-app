"use client";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import Dropdown from "@/components/common/Dropdown";

export const metadata = {
  title: "Artist Onboarding",
  description: "Onboard new artists by providing their details, categories, languages, and fee range.",
  keywords: "artist onboarding, artist registration, artist profile, event management",
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  imageUrl: yup.string().url("Must be a valid URL").nullable().notRequired(),
});

const categories = ["Singer", "Band", "Dancer", "DJ", "Comedian", "Magician"];
const languages = ["Hindi", "English", "Telugu", "Tamil", "Gujarati"];

export default function OnboardingPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const { control, handleSubmit, register, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      feeRange: "",
      imageUrl: "",
      location: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Artist Data Submitted:", data);
    alert("Artist submitted successfully!");
  };

  const toggleArrayValue = (field, value, currentValues) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    setValue(field, newValues);
    field === "category" ? setSelectedCategories(newValues) : setSelectedLanguages(newValues);
  };

  return (
  
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Artist Onboarding</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

            {/* Name */}
            <div>
              <Label htmlFor="name"  className={"mb-2"} >Name</Label>
              <Input id="name" name="name"  {...register("name")} placeholder="Artist Name" />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Bio */}
            <div>
              <Label htmlFor="bio" className={"mb-2"}>Bio</Label>
              <Textarea id="bio" {...register("bio")} placeholder="Short bio" />
              {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>}
            </div>

            {/* Categories */}
            <div>
              <Label  className={"mb-2"}>Category</Label>
              <div  className="grid grid-cols-2 gap-2">
                {categories.map((cat) => (
                  <div key={cat} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedCategories.includes(cat)}
                      onCheckedChange={() =>
                        toggleArrayValue("category", cat, selectedCategories)
                      }
                    />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
              {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
            </div>

            {/* Languages */}
            <div>
              <Label  className={"mb-2"}>Languages</Label>
              <div  className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div key={lang} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedLanguages.includes(lang)}
                      onCheckedChange={() =>
                        toggleArrayValue("languages", lang, selectedLanguages)
                      }
                    />
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
              {errors.languages && <p className="text-red-500 text-xs mt-1">{errors.languages.message}</p>}
            </div>

            {/* Fee Range */}
            <div>
              <Label className={"mb-2"}>Fee Range</Label>
              <Controller
                
                control={control}
                name="feeRange"
                render={({ field }) => (
                  <Dropdown
                    options={[ "₹10,000 - ₹20,000", "₹20,000 - ₹40,000", "₹40,000 - ₹60,000", "₹60,000 - ₹1,00,000"]}
                    onValueChange={field.onChange}
                    placeholder="Select fee range"
                    aria-label="Select price range"
                  />
                )}
              />
              {errors.feeRange && <p className="text-red-500 text-xs mt-1">{errors.feeRange.message}</p>}
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="address" className={"mb-2"}>Location</Label>
              <Input id="address" name="location" {...register("location")} placeholder="City or region" />
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
            </div>

            {/* Profile Image URL */}
            <div>
              <Label htmlFor="imageurl" className={"mb-2"}>Profile Image URL (optional)</Label>
              <Input id="imageurl"  {...register("imageUrl")} placeholder="https://example.com/photo.jpg" />
              {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl.message}</p>}
            </div>

            <Button type="submit" className="w-full">Submit Artist</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  
  );
}
