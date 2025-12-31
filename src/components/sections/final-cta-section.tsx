import RecommendationForm from '@/components/recommendation-form';

const RecommendationSection = () => {
    return (
        <section id="recommendation" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Not Sure What to Choose?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Tell us what you're in the mood for, and our AI assistant will recommend the perfect dining experience for you at Atithi.
                    </p>
                </div>

                <div className="max-w-xl mx-auto mt-8">
                   <RecommendationForm />
                </div>
            </div>
        </section>
    );
}

export default RecommendationSection;
