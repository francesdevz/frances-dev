import { cn } from "../../lib/utils";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandBootstrap,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandDjango,
  IconBrandCSharp,
  IconBrandPhp,
  IconBrandLaravel,
  IconBrandPython,
  IconBrandFlutter,
  IconBrandReactNative,
  IconBrandReact,
  IconBrandVue,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandSupabase,
  IconBrandAngular,
  IconBrandTypescript,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandGit,
  IconBrandVisualStudio
} from "@tabler/icons-react";

import { JavaOutlined } from '@ant-design/icons';
import MaterialUISvgIcon from "./SvgComponents/MaterialUISvg";
import AntDesignSvgIcon from "./SvgComponents/AntDesignSvg";
import DotNotIcon from "./SvgComponents/DotNetSvg";
import ExpressSvgIcon from "./SvgComponents/ExpressSvg";
import PostreSvgIcon from "./SvgComponents/PostgreSvg";
import MariaDbSvgIcon from "./SvgComponents/MariaDBSvg";
import SmartTomCatSvgIcon from "./SvgComponents/SmartTomcatSvg";
import RabbitMqSvgIcon from "./SvgComponents/RabbitMqSvg";
import SpringBootSvgIcon from "./SvgComponents/SpringBootSvg";
import HibernateSvgIcon from "./SvgComponents/HibernateSvg";
import IntellijSvgIcon from "./SvgComponents/IntellijSvg";
import SourceTree from "./SvgComponents/SourceTreeSvg";
import { DbeaverSvgIcon } from "./SvgComponents/DbeaverSvg";

export function TechStacksMap() {
  // Categorized features
  const categories = [
    {
      name: "Frontend",
      features: [
        { title: "HTML", icon: <IconBrandHtml5/> },
        { title: "CSS", icon: <IconBrandCss3 /> },
        { title: "JavaScript", icon: <IconBrandJavascript /> },
        { title: "TypeScript", icon: <IconBrandTypescript /> },
        { title: "BootStrap", icon: <IconBrandBootstrap /> },
        { title: "TailWind", icon: <IconBrandTailwind /> },
        { title: "Material UI", icon: <MaterialUISvgIcon/> },
        { title: "Ant Design", icon: <AntDesignSvgIcon/> },
        { title: "React JS", icon: <IconBrandReact/> },
        { title: "Next JS", icon: <IconBrandNextjs/> },
        { title: "Angular JS", icon: <IconBrandAngular/> },
        { title: "Vue JS", icon: <IconBrandVue/> },
      ]
    },
    {
      name: "Backend",
      features: [
        { title: "Java", icon: <JavaOutlined style={{ fontSize: '25px', color: 'rgba(255, 255, 255, 1)' }} /> },
        { title: "Node JS", icon: <IconBrandNodejs/> },
        { title: "Express JS", icon: <ExpressSvgIcon/> },
        { title: "DJango", icon: <IconBrandDjango/> },
        { title: "C Sharp", icon: <IconBrandCSharp/> },
        { title: "ASP.NET", icon: <DotNotIcon/> },
        { title: "PHP", icon: <IconBrandPhp/> },
        { title: "Laravel", icon: <IconBrandLaravel/> },
        { title: "Spring Boot", icon: <SpringBootSvgIcon/> },
        { title: "Hibernate", icon: <HibernateSvgIcon/> },
        { title: "Python", icon: <IconBrandPython/> },
      ]
    },
    {
      name: "Mobile",
      features: [
        { title: "Flutter", icon: <IconBrandFlutter/> },
        { title: "React Native", icon: <IconBrandReactNative/> },
      ]
    },
    {
      name: "Databases",
      features: [
        { title: "MySql", icon: <IconBrandMysql/> },
        { title: "MongoDB", icon: <IconBrandMongodb/> },
        { title: "SupaBase", icon: <IconBrandSupabase/> },
        { title: "PostgreSql", icon: <PostreSvgIcon/> },
        { title: "MariaDB", icon: <MariaDbSvgIcon/> },
      ]
    },
    {
      name: "Tools & Infrastructure",
      features: [
        { title: "Tomcat", icon: <SmartTomCatSvgIcon/> },
        { title: "RabbitMQ", icon: <RabbitMqSvgIcon/> },
        { title: "GitHub", icon: <IconBrandGithub /> },
        { title: "Vs Code", icon: <IconBrandVscode /> },
        { title: "Git", icon: <IconBrandGit /> },
        { title: "IntelliJ IDEA", icon: <IntellijSvgIcon /> },
        { title: "DBeaver", icon: <DbeaverSvgIcon /> },
        { title: "SourceTree", icon: <SourceTree /> },
        { title: "Visual Studio", icon: <IconBrandVisualStudio /> },
      ]
    }
  ];

  let totalFeatures = 0;
  categories.forEach(category => {
    totalFeatures += category.features.length;
  });

  return (
    <div className="relative z-10 py-10 max-w-7xl mx-auto">
      {categories.map((category, categoryIndex) => (
        <div key={category.name} className="mb-12">
          <p className="relative z-10 mt-4 mb-10 text-lg text-white opacity-90 mb-4">
            {category.name}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            {category.features.map((feature, index) => {
              const globalIndex = categories
                .slice(0, categoryIndex)
                .reduce((acc, curr) => acc + curr.features.length, 0) + index;
                
              return (
                <Feature 
                  key={feature.title} 
                  title={feature.title} 
                  icon={feature.icon} 
                  index={globalIndex}
                  totalFeatures={totalFeatures}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

const Feature = ({
  title,
  icon,
  index,
  totalFeatures
}: {
  title: string;
  icon: React.ReactNode;
  index: number;
  totalFeatures: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === totalFeatures - 1) && "lg:border-l dark:border-neutral-800",
        index < totalFeatures - 1 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < totalFeatures - 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= totalFeatures - 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-white-600 dark:text-white-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-neutral-500 transition-all duration-200 origin-center" />
        <span className="text-sm group-hover/feature:translate-x-2 transition duration-200 inline-block text-white-100 dark:text-white-100">
          {title}
        </span>
      </div>   
    </div>
  );
};