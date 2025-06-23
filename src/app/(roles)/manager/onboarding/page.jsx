"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div>
              <Label className={"mb-1"} >Name</Label>
              <Input {...register("name")} placeholder="Artist Name" />
              {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
            </div>

            {/* Bio */}
            <div>
              <Label className={"mb-1"}>Bio</Label>
              <Textarea {...register("bio")} placeholder="Short bio" />
              {errors.bio && <p className="text-red-500 text-xs">{errors.bio.message}</p>}
            </div>

            {/* Categories */}
            <div>
              <Label className={"mb-1"}>Category</Label>
              <div className="grid grid-cols-2 gap-2">
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
              {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
            </div>

            {/* Languages */}
            <div>
              <Label className={"mb-1"}>Languages</Label>
              <div className="grid grid-cols-2 gap-2">
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
              {errors.languages && <p className="text-red-500 text-xs">{errors.languages.message}</p>}
            </div>

            {/* Fee Range */}
            <div>
              <Label className={"mb-1"}>Fee Range</Label>
              <Controller
                control={control}
                name="feeRange"
                render={({ field }) => (
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select fee range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</SelectItem>
                      <SelectItem value="₹20,000 - ₹40,000">₹20,000 - ₹40,000</SelectItem>
                      <SelectItem value="₹40,000 - ₹60,000">₹40,000 - ₹60,000</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.feeRange && <p className="text-red-500 text-xs">{errors.feeRange.message}</p>}
            </div>

            {/* Location */}
            <div>
              <Label className={"mb-1"}>Location</Label>
              <Input {...register("location")} placeholder="City or region" />
              {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
            </div>

            {/* Profile Image URL */}
            <div>
              <Label className={"mb-1"}>Profile Image URL (optional)</Label>
              <Input {...register("imageUrl")} placeholder="https://example.com/photo.jpg" />
              {errors.imageUrl && <p className="text-red-500 text-xs">{errors.imageUrl.message}</p>}
            </div>

            <Button type="submit" className="w-full">Submit Artist</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
