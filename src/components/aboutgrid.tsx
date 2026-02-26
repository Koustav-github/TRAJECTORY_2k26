"use client";

import {
  ShieldCheck,
  Zap,
  Users,
  Trophy,
  Cpu,
  Workflow,
} from "lucide-react";
import { Card, Grid } from "@/components/grid_setup";

function About() {
  const features = [
    {
      Icon: Cpu,
      name: "The Vision",
      description: "Trajectory 2k26 is a catalyst for industrial revolution, redefining engineering through sustainable innovation and digital intelligence.",
      href: "/",
      background: <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />,
      className: "lg:col-span-2 lg:row-span-1",
    },
    {
      Icon: ShieldCheck,
      name: "Legacy of Excellence",
      description: "Pushing the envelope in design, thermal dynamics, and materials science.",
      href: "/",
      background: <div className="absolute inset-0 bg-linear-to-bl from-secondary/5 to-transparent pointer-events-none" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      Icon: Users,
      name: "Engineering Community",
      description: "A network of 500+ innovators shaping the future together.",
      href: "/",
      background: <div className="absolute inset-0 bg-linear-to-tr from-accent/5 to-transparent pointer-events-none" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      Icon: Trophy,
      name: "Elite Competitions",
      description: "Witness the peak of mechanical prowess in CAD and robotics.",
      href: "/",
      background: <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent pointer-events-none" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
    {
      Icon: Workflow,
      name: "Hands-on Workshops",
      description:
        "Master aerospace, automotive, and automation tools with industry experts.",
      href: "/",
      background: <div className="absolute inset-0 bg-linear-to-tl from-secondary/10 to-transparent pointer-events-none" />,
      className: "lg:col-span-1 lg:row-span-1",
    },
  ];
  return (
    <Grid className="pb-20">
      {features.map((feature) => (
        <Card key={feature.name} {...feature} />
      ))}
    </Grid>
  );
}

export default About;
