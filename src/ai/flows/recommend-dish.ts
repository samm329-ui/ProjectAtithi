'use server';
/**
 * @fileOverview A dish recommendation AI agent based on a questionnaire.
 *
 * - recommendDish - A function that recommends a dish based on user's answers.
 * - RecommendDishInput - The input type for the recommendDish function.
 * - RecommendDishOutput - The return type for the recommendDish function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { menuData } from '@/lib/menu';

const RecommendDishInputSchema = z.object({
  occasion: z.string().describe("The user's dining occasion (e.g., 'A special celebration')"),
  mood: z.string().describe("The user's current mood (e.g., 'Indulgent and celebratory')"),
  flavor: z.string().describe("The user's flavor preference (e.g., 'Rich & creamy')"),
});
export type RecommendDishInput = z.infer<typeof RecommendDishInputSchema>;

const RecommendDishOutputSchema = z.object({
  dishName: z.string().describe('The name of the recommended dish.'),
  reason: z.string().describe('A brief reason why this dish is recommended.'),
});
export type RecommendDishOutput = z.infer<typeof RecommendDishOutputSchema>;

export async function recommendDish(input: RecommendDishInput): Promise<RecommendDishOutput> {
  return recommendDishFlow(input);
}

// Flatten the menu for the prompt
const allDishes = menuData.flatMap(category =>
  category.items.map(item => ({ name: item.name, price: item.price, description: item.description }))
);

const premiumDishes = allDishes.filter(d => d.price >= 200).map(d => d.name);
const midRangeDishes = allDishes.filter(d => d.price > 100 && d.price < 200).map(d => d.name);

const prompt = ai.definePrompt({
  name: 'recommendDishPrompt',
  input: { schema: RecommendDishInputSchema },
  output: { schema: RecommendDishOutputSchema },
  prompt: `You are a savvy restaurant host for an Indian restaurant called Atithi. Your goal is to recommend a single dish to a customer based on their answers to a questionnaire.

  Your primary goal is to guide them towards a more premium, expensive, and memorable dish if their answers suggest they are in the mood for something special.

  Here are the user's answers:
  - Occasion: {{{occasion}}}
  - Mood: {{{mood}}}
  - Flavor Preference: {{{flavor}}}

  Here are the lists of dishes you can recommend from:
  - Premium Dishes (most expensive): ${premiumDishes.join(', ')}
  - Mid-Range Dishes: ${midRangeDishes.join(', ')}

  Your recommendation logic:
  1. If the occasion is "A special celebration" OR the mood is "Indulgent and celebratory," you MUST recommend a dish from the Premium Dishes list. Pick one that best fits the flavor profile.
  2. If the flavor is "Rich & creamy," lean towards dishes like Butter Chicken, Paneer Butter Masala, Paneer Malai Kofta, or Mutton Kurma.
  3. If the flavor is "Spicy & bold," lean towards dishes like Kadai Paneer, Chicken Jhal Fry, or Mutton Kasa.
  4. For more casual selections, you can recommend from the Mid-Range Dishes, but always prioritize a premium option if the context allows.
  
  Based on this, recommend one single dish.

  Provide the dish name and a compelling, short reason why it's the perfect choice for them, creating a sense of personalized recommendation.
  Example output:
  {
    "dishName": "Butter Chicken",
    "reason": "For a truly indulgent and celebratory meal, our signature Butter Chicken offers a rich, creamy flavor that is simply unforgettable."
  }
  `,
});

const recommendDishFlow = ai.defineFlow(
  {
    name: 'recommendDishFlow',
    inputSchema: RecommendDishInputSchema,
    outputSchema: RecommendDishOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
