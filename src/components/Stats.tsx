import { Users, Leaf, Clock, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "14",
    label: "Happy Clients",
  },
  {
    icon: Leaf,
    value: "244",
    label: "Plants Sold",
  },
  {
    icon: Clock,
    value: "2",
    label: "Ongoing Project",
  },
  {
    icon: TrendingUp,
    value: "4",
    label: "Upcoming Project",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-stat-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-in fade-in zoom-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
