

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type WriteReviewSectionProps = {
    onReviewSubmit: (review: { name: string; title: string; review: string }) => void;
};

const WriteReviewSection = ({ onReviewSubmit }: WriteReviewSectionProps) => {
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    const [title, setTitle] = useState("Customer");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && review) {
            onReviewSubmit({ name, title, review });
            setName("");
            setReview("");
            setTitle("Customer");
        }
    };

    return (
        <section id="write-review" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <CardHeader>
                                <CardTitle>Share Your Experience</CardTitle>
                                <CardDescription>
                                    Your feedback helps us improve. Let us know what you think!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your Name</Label>
                                    <Input 
                                        id="name" 
                                        placeholder="Enter your name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="title">Your Title (Optional)</Label>
                                    <Input 
                                        id="title" 
                                        placeholder="e.g., 'Frequent Traveler'" 
                                        value={title} 
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="review">Your Review</Label>
                                    <Textarea 
                                        id="review" 
                                        placeholder="What did you like or dislike?" 
                                        value={review} 
                                        onChange={(e) => setReview(e.target.value)}
                                        required
                                    />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button type="submit" className="w-full">Submit Review</Button>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default WriteReviewSection;
