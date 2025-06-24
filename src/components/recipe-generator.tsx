"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateRecipe, type RecipeGeneratorOutput } from "@/ai/flows/recipe-generator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  ingredients: z.string().min(3, {
    message: "Please enter at least one ingredient.",
  }),
});

export default function RecipeGenerator() {
  const [recipe, setRecipe] = useState<RecipeGeneratorOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecipe(null);
    try {
      const result = await generateRecipe(values);
      setRecipe(result);
    } catch (error) {
      console.error("Failed to generate recipe:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate a recipe. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="p-0 mb-4">
          <CardTitle>AI Recipe Generator</CardTitle>
          <CardDescription>Enter some ingredients you have, and I'll generate a recipe for you!</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ingredients</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., chicken, tomatoes, rice" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full button-glow">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Recipe
                  </>
                )}
              </Button>
            </form>
          </Form>

          {recipe && (
            <Card className="mt-6 glassmorphism">
              <CardHeader>
                <CardTitle>{recipe.recipeName}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap font-body">{recipe.instructions}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
