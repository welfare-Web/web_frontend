// app/services/serviceData.js

// =======================================================
// ✅ MAIN SERVICES PAGE CARDS DATA
// (Used in /services page)
// =======================================================
export const SERVICES = [
  {
    title: "Software & Web Development",
    slug: "software-web-development",
    desc: "We build scalable, secure, and high-performance software and web solutions aligned with real business objectives.",
    img: "/WebDevelopment 1.jpg",
    icon: "/And.png",
    index: "01",
  },
  {
    title: "Python Development",
    slug: "python-development",
    desc: "We develop efficient and scalable Python applications for automation, backend systems, and data-driven solutions.",
    img: "/Python.jpg",
    icon: "/Python.png",
    index: "02",
  },
  {
    title: "Data Annotation & AI Training Data",
    slug: "ai-data-annotation",
    desc: "We deliver high-quality labeled data essential for training accurate AI and machine learning models.",
    img: "/AI.png",
    icon: "/removed_background.png",
    index: "03",
  },
  {
    title: "UI/UX & Creative Design",
    slug: "uiux-design",
    desc: "We design visually appealing and user-friendly digital experiences that improve engagement.",
    img: "/UIUX & Creative Design.png",
    icon: "/UI.png",
    index: "04",
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    desc: "We deliver data-driven digital marketing strategies that increase brand visibility, generate quality leads, and drive consistent business growth.",
    img: "/DM1.png",
    icon: "/DM.png",
    index: "05",
  },
  {
    title: "Publishing Services",
    slug: "publishing-services",
    desc: "We deliver high-quality digital publishing solutions that meet global standards. Our services ensure accuracy, accessibility, and consistency.",
    img: "/Publishing Services 1.png",
    icon: "/Publish Services1.png",
    index: "06",
  },
  {
    title: "Business Process Outsourcing (BPO)",
    slug: "bpo",
    desc: "We provide scalable outsourcing solutions that improve operational efficiency, reduce costs, and allow businesses to focus on core growth.",
    img: "/Business Process Automation.png",
    icon: "/BPO.png",
    index: "07",
  },
  {
    title: "Training & Consultant",
    slug: "training-consultant",
    desc: "We deliver industry-focused training and consulting that equips professionals with practical, job-ready skills for real-world success.",
    img: "/img1.jpg",
    icon: "/T&C.png",
    index: "08",
  },
];

// =======================================================
// ✅ DEPARTMENT PAGES DATA BY SLUG
// (Used in /services/[slug] page)
// =======================================================
export const SERVICE_PAGES = {
  // =======================================================
  // ✅ SOFTWARE & WEB DEVELOPMENT
  // =======================================================
  "software-web-development": {
    hero: {
      title1: "Best Software &",
      title2: "Web Development Team",
      subtitle: "Innovative Technology Solutions",
      para:
        "We design, develop, and deliver powerful software and web solutions that help businesses grow, scale, and succeed in the digital world. From startups to enterprises, we turn ideas into high-performing digital products.",
      service:"software-web-development"
    },

    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],

    tabs: [
      {
        title: "Web Design & Development",
    desc: "We design and develop high-performance websites that elevate your brand and drive real business results. From concept to launch, our team delivers modern, responsive, and user-focused digital experiences tailored to your goals..",
    desc1: "Business-focused web design, development, and ongoing support services built for agencies, startups, and growing enterprises. Crafted with precision, scalability, and performance in mind.",
    perc1: "84",
    perc2: "86",
    cont1: "We provide innovative web solutions",
    cont2: "Built for performance, usability, and growth",
    cont11: "We provide innovative web solutions",
    cont12: "Built for performance, usability, and growth",
    para1:
      "Tailored web design and development services including UI/UX design, frontend and backend development, CMS integration, and ongoing maintenance—helping businesses establish a strong, effective online presence.",
    para2:
      "Our web solutions are created using modern technologies, clean code standards, and proven design principles. Every project is optimized for speed, security, and search engines, ensuring your website not only looks great but performs exceptionally across all devices. From simple business websites to complex web applications, we build digital platforms that grow with your business.",
    img143: "/web.png",
      },
      {
        title: "Full Stack Web Development",
    desc: "We deliver end-to-end full stack web development solutions that power scalable, secure, and high-performing digital products. From intuitive front-end interfaces to robust back-end architectures, we build complete systems tailored to your business needs.",
    desc1:
      "Business-driven full stack development services covering design, development, integration, and long-term support for startups, enterprises, and digital agencies.",
    perc1: "94",
    perc2: "86",
    cont1: "Complete front-end & back-end development",
    cont2: "Scalable, secure, and performance-optimized solutions",
    cont11: "Modern technology stacks & clean architecture",
    cont12: "Built for long-term growth and flexibility",
    para1:
      "Customized full stack web development services including UI/UX design, frontend frameworks, backend APIs, database management, cloud deployment, and maintenance—delivering seamless, fully integrated web applications.",
    para2:
      "Our full stack solutions combine modern frameworks, efficient databases, and reliable server-side technologies to ensure speed, security, and scalability. We follow best coding practices and agile workflows to create web applications that are easy to maintain, future-ready, and aligned with your business objectives.",
    img143: "/fullstack (2).png",
      },
      {
        title: "Custom Software Development",
    desc: "We build tailored software solutions designed to meet your unique business requirements and streamline operations. From concept and architecture to deployment and support, our custom software services deliver flexibility, scalability, and long-term value.",
    desc1:
      "Business-focused custom software development services including planning, design, development, integration, and ongoing maintenance for startups, enterprises, and growing organizations.",
    perc1: "84",
    perc2: "86",
    cont1: "Software built around your exact requirements",
    cont2: "Scalable, secure, and future-ready solutions",
    cont11: "Modern technologies and clean architecture",
    cont12: "Optimized for performance and reliability",
    para1:
      "End-to-end custom software development services covering requirement analysis, UI/UX design, backend and frontend development, API integration, database design, cloud deployment, and continuous support—ensuring software that fits your business perfectly.",
    para2:
      "Our custom software solutions are developed using industry best practices and proven technologies. We focus on maintainability, security, and performance to deliver software that evolves with your business, enhances productivity, and provides a competitive advantage.",
    img143: "/software.png",
      },
      {
        title: "Mobile App Development",
    desc: "We design and develop high-quality mobile applications that deliver seamless user experiences and real business value. From concept and UI/UX design to development and deployment, our mobile app solutions are built to perform across platforms and devices.",
    desc1:
      "Business-focused mobile app development services for startups, enterprises, and digital agencies—crafted for scalability, security, and long-term growth.",
    perc1: "84",
    perc2: "86",
    cont1: "Native & cross-platform mobile solutions",
    cont2: "User-centric design and smooth performance",
    cont11: "Secure, scalable, and future-ready apps",
    cont12: "Built with modern frameworks and technologies",
    para1:
      "End-to-end mobile app development services including UI/UX design, iOS and Android development, cross-platform solutions, API integration, cloud backend, testing, deployment, and ongoing maintenance.",
    para2:
      "Our mobile applications are developed using modern technologies and best practices to ensure speed, stability, and security. We focus on intuitive design, optimized performance, and seamless integrations to create apps that engage users and scale effortlessly as your business grows.",
    img143: "/mobile.png",
      },
      {
        title: "ERP & CRM Development",
    desc: "We develop powerful ERP and CRM solutions that centralize operations, improve customer relationships, and drive smarter business decisions. Our systems are tailored to your workflows, ensuring efficiency, scalability, and seamless integration across your organization.",
    desc1:
      "Business-oriented ERP and CRM development services designed for startups, enterprises, and growing organizations seeking better process automation and data management.",
    perc1: "84",
    perc2: "86",
    cont1: "Centralized business process managements",
    cont2: "Improved productivity and operational control",
    cont11: "Scalable, secure, and customizable systems",
    cont12: "Built to integrate with existing tools",
    para1:
      "Custom ERP and CRM development services including requirement analysis, system architecture, module development, third-party integrations, data migration, cloud deployment, training, and ongoing support—delivering solutions aligned with your business goals.",
    para2:
      "Our ERP and CRM solutions are built using modern technologies and best practices to ensure reliability, security, and performance. We focus on automation, real-time insights, and user-friendly interfaces to help businesses streamline operations, enhance customer engagement, and scale efficiently.",
    img143: "/ERP.png",
      },
      {
        title: "API & Backend Development",
    desc: "We build robust, secure, and scalable backend systems that power modern applications and digital platforms. Our API and backend solutions are designed to handle complex business logic, ensure seamless data flow, and support high-performance applications.",
    desc1:
      "Business-focused API and backend development services for startups, enterprises, and technology-driven organizations—engineered for reliability, scalability, and security.",
    perc1: "84",
    perc2: "86",
    cont1: "High-performance backend architectures",
    cont2: "Secure and scalable API solutions",
    cont11: "Seamless system and third-party integrations",
    cont12: "Optimized for stability and growth",
    para1:
      "End-to-end API and backend development services including system architecture design, RESTful and GraphQL APIs, microservices, database design, authentication, cloud deployment, performance optimization, and ongoing maintenance.",
    para2:
      "Our backend systems are developed using modern frameworks and best practices to ensure efficiency, security, and scalability. We focus on clean architecture, reliable integrations, and optimized data handling to create backend solutions that support growth and adapt to evolving business needs.",
    img143: "/API.png",
      },
    ],
  },

  // =======================================================
  // ✅ PYTHON DEVELOPMENT
  // =======================================================
  "python-development": {
    hero: {
      title1: "Professional",
      title2: "Python Development",
      subtitle: "Automation • APIs • Backend",
      para:
        "We build efficient and scalable Python applications for automation, backend systems, and data-driven solutions. Our development practices ensure clean architecture, maintainability, and performance.",
      service:"python-development"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
    title: "Automation & Scripting",
    desc: "We automate repetitive and time-consuming workflows using Python scripting to boost speed and accuracy across your daily operations.",
    desc1: "Smart automation solutions that reduce manual work, minimize errors, and improve team productivity with reliable script-based systems.",
    perc1: "88",
    perc2: "90",
    cont1: "Task automation with Python",
    cont2: "Reduce manual workload",
    cont11: "Stable scripts and scheduling",
    cont12: "Improved speed & accuracy",
    para1:
      "Python automation services including file handling, report generation, web scraping, data cleanup, task scheduling, and workflow scripting—designed to eliminate repetitive work and streamline operations.",
    para2:
      "Our scripts are optimized for stability, speed, and maintainability. We implement error handling, logging, and modular coding practices so your automation runs smoothly at scale. Whether it’s automating business tasks, backend operations, or data handling, we deliver efficient solutions that save time and resources.",
    img143: "/Artificial.png",
  },

  {
    title: "Django & Flask Web Applications",
    desc: "We build secure and scalable web applications using Django and Flask, designed for speed, performance, and future-ready scalability.",
    desc1: "Modern backend development with clean architecture, authentication, dashboards, admin panels, and robust database integration.",
    perc1: "86",
    perc2: "89",
    cont1: "Scalable backend development",
    cont2: "Secure authentication systems",
    cont11: "Modern dashboards & admin",
    cont12: "Optimized performance & growth",
    para1:
      "Web application development using Django and Flask including login systems, role-based dashboards, admin modules, database integration, and deployment-ready backend architecture.",
    para2:
      "We follow best practices like MVC/MVT architecture, modular apps, secure authentication, and optimized database queries. Our Django & Flask solutions are built to handle growth, support future features, and remain easy to maintain — making them perfect for startups, SaaS products, and enterprise systems.",
    img143: "/django.png",
  },

  {
    title: "API Development",
    desc: "We design and develop RESTful APIs that connect systems seamlessly with secure endpoints, clean documentation, and scalable architecture.",
    desc1: "Reliable API solutions built for mobile apps, web apps, integrations, and third-party services with long-term performance in mind.",
    perc1: "84",
    perc2: "87",
    cont1: "REST API architecture",
    cont2: "Secure API endpoints",
    cont11: "Smooth system integrations",
    cont12: "Documentation & scalability",
    para1:
      "API development services including REST API architecture, authentication (JWT/OAuth), request validation, rate limiting, API documentation, and versioning—built for speed and reliability.",
    para2:
      "We create well-structured APIs that are easy to scale and integrate. From database query optimization to security layers, our APIs are designed to support real business applications like dashboards, mobile apps, payment integrations, and automation services without performance bottlenecks.",
    img143: "/API Development.png",
  },

  {
    title: "ETL Pipeline Development",
    desc: "We build efficient ETL pipelines to extract, transform, and load large-scale data accurately for analytics, automation, and reporting.",
    desc1: "Data pipeline systems designed for performance, validation, scheduling, and clean transformation for business-ready insights.",
    perc1: "82",
    perc2: "85",
    cont1: "Large-scale data processing",
    cont2: "Structured ETL pipelines",
    cont11: "Clean transformation logic",
    cont12: "Analytics-ready datasets",
    para1:
      "ETL development including data extraction from APIs/databases/files, transformation logic, validation rules, scheduling workflows, and loading into target systems like warehouses or dashboards.",
    para2:
      "Our ETL pipelines are designed to handle high-volume data with consistency and accuracy. We implement monitoring, logging, and automated validation to ensure clean datasets for reporting and decision-making. Whether you need batch processing or real-time pipelines, we deliver scalable and optimized ETL solutions.",
    img143: "/pipe.png",
  },

  {
    title: "Machine Learning Model Deployment",
    desc: "We deploy machine learning models into production using scalable architectures with monitoring, performance optimization, and reliable inference.",
    desc1: "End-to-end deployment solutions including APIs, cloud integration, model versioning, logging, and real-world performance stability.",
    perc1: "80",
    perc2: "84",
    cont1: "Production ML deployment",
    cont2: "Scalable inference systems",
    cont11: "Model monitoring & logging",
    cont12: "Performance tuning & stability",
    para1:
      "ML deployment services including model packaging, API deployment, Docker/containerization, cloud deployment, performance tuning, and monitoring—ensuring models work reliably in production.",
    para2:
      "We make sure your model performs consistently in real-world conditions by implementing version control, rollback strategies, and monitoring for drift and accuracy. From deploying models as REST APIs to integrating with business applications, we deliver scalable ML deployments ready for production workloads.",
    img143: "/machine.png",
  },
    ],
  },

  // =======================================================
  // ✅ AI DATA ANNOTATION
  // =======================================================
  "ai-data-annotation": {
    hero: {
      title1: "Accurate",
      title2: "AI Training Data",
      subtitle: "Data Annotation • Labeling • QA",
      para:
        "We provide high-quality labeled datasets essential for training accurate AI and machine learning models. Our annotation processes ensure precision, consistency, and scalability.",
      service:"ai-data-annotation"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
    title: "Video Annotation",
    desc: "We deliver accurate video annotations for object tracking, motion analysis, and frame-level labeling to support advanced computer vision applications.",
    desc1: "High-quality video labeling workflows designed for AI training with consistency, speed, and scalable dataset processing.",
    perc1: "88",
    perc2: "91",
    cont1: "Frame-wise object tracking",
    cont2: "Motion analysis labeling",
    cont11: "Multi-class video tagging",
    cont12: "Dataset accuracy validation",
    para1:
      "Video annotation services including bounding boxes, object tracking, segmentation, motion labeling, and multi-class tagging—supporting autonomous systems, surveillance analytics, and computer vision products.",
    para2:
      "We ensure dataset accuracy by using clear annotation rules, multi-stage verification, and strict quality validation. Our team supports large-scale annotation projects with reliable turnaround times, consistent labeling formats, and optimized workflows for training high-performing AI models.",
    img143: "/Video.png",
  },

  {
    title: "Image Annotation",
    desc: "We provide precise image labeling to improve AI training outcomes with accurate object classification, detection, and segmentation techniques.",
    desc1: "High-quality image annotation solutions that ensure clean data for machine learning, computer vision, and automation systems.",
    perc1: "87",
    perc2: "90",
    cont1: "Pixel-accurate labeling",
    cont2: "Object detection datasets",
    cont11: "Segmentation & keypoints",
    cont12: "Consistency across datasets",
    para1:
      "Image annotation services including bounding boxes, polygon segmentation, keypoint annotation, classification labeling, and OCR tagging—used for ML model training and vision-based automation.",
    para2:
      "Our annotation workflows are designed for accuracy and large dataset scalability. We apply strict guidelines, dataset consistency checks, and multiple review stages to maintain high labeling quality across thousands or millions of images.",
    img143: "/Image.png",
  },

  {
    title: "Text Annotation",
    desc: "We annotate text datasets for NLP tasks such as sentiment analysis, classification, and entity recognition to improve language model accuracy.",
    desc1: "Reliable text labeling workflows built for chatbot training, search engines, recommendation systems, and language intelligence tools.",
    perc1: "85",
    perc2: "88",
    cont1: "NER & entity tagging",
    cont2: "Sentiment classification",
    cont11: "Intent & topic labeling",
    cont12: "Clean NLP training data",
    para1:
      "Text annotation services including sentiment labeling, intent classification, named entity recognition (NER), topic tagging, and document labeling—supporting AI-driven language applications.",
    para2:
      "We follow consistent labeling guidelines and verification steps to ensure high-quality NLP datasets. Our processes support both small and large-scale projects, producing reliable annotations that reduce noise and strengthen AI training outcomes.",
    img143: "/Text.png",
  },

  {
    title: "Audio Transcription",
    desc: "We convert audio content into highly accurate text with multi-level validation to support speech recognition, subtitles, and NLP processing.",
    desc1: "Fast, scalable transcription workflows built for quality and clarity, improving dataset value for AI training and analytics.",
    perc1: "86",
    perc2: "89",
    cont1: "Accurate speech-to-text",
    cont2: "Speaker & timestamping",
    cont11: "Subtitle-ready transcripts",
    cont12: "Multi-stage proofreading",
    para1:
      "Audio transcription services including speech-to-text conversion, timestamping, speaker labeling, subtitle generation, and accuracy validation for AI and business usage.",
    para2:
      "We ensure high transcription accuracy by applying multiple validation layers—review, correction, and final quality checks. This results in clean text datasets that improve training for voice assistants, NLP systems, and speech analytics platforms.",
    img143: "/Audio.png",
  },

  {
    title: "Quality Assurance",
    desc: "We conduct rigorous multi-stage quality checks across datasets and workflows to ensure accuracy, compliance, and improved AI model performance.",
    desc1: "Quality validation services built to eliminate labeling errors, reduce noise, and enhance training reliability for machine learning systems.",
    perc1: "90",
    perc2: "93",
    cont1: "Annotation error detection",
    cont2: "Compliance quality checks",
    cont11: "Sampling & validation audits",
    cont12: "Improved dataset reliability",
    para1:
      "Quality assurance services including dataset audits, annotation validation, compliance checks, error reporting, and standardization—ensuring reliable output for AI pipelines.",
    para2:
      "Our QA process ensures consistent accuracy and reduces defect rates through strict guidelines, sampling checks, and review workflows. From AI dataset QA to process validation, we help clients maintain clean, trustworthy data for stronger AI outcomes.",
    img143: "/Quality.png",
  },

  // ======================================================
  // Digital Transformation & Automation
  // ======================================================

  {
    title: "Digital Transformation & Automation",
    desc: "We help organizations modernize operations through digital transformation and intelligent automation strategies that improve control and efficiency.",
    desc1: "End-to-end transformation solutions that streamline systems, reduce manual workload, and enhance business performance.",
    perc1: "84",
    perc2: "88",
    cont1: "Modern digital operations",
    cont2: "Automation-first strategy",
    cont11: "System upgrade planning",
    cont12: "Process modernization roadmap",
    para1:
      "Digital transformation services including workflow modernization, automation planning, system integration, cloud adoption, and data-driven process improvement for sustainable growth.",
    para2:
      "We analyze your existing business processes, identify automation opportunities, and implement modern tools that improve productivity. Our goal is to create scalable and optimized operations that reduce effort, improve accuracy, and accelerate business outcomes.",
    img143: "/Digital.png",
  },

  {
    title: "Business Process Automation",
    desc: "We automate manual workflows to reduce costs, improve execution speed, and eliminate process errors across your organization.",
    desc1: "Automation systems designed for smooth operations, consistent performance, and smarter business efficiency.",
    perc1: "86",
    perc2: "90",
    cont1: "Workflow automation systems",
    cont2: "Faster approvals & delivery",
    cont11: "Reduce operational workload",
    cont12: "Eliminate human process errors",
    para1:
      "Business process automation including workflow automation, approval systems, automated reporting, CRM automation, and integration with business tools to streamline daily operations.",
    para2:
      "We build secure and scalable automation systems that reduce human dependency and speed up execution. Our solutions provide real-time process visibility, reduce operational delays, and ensure consistent output across departments.",
    img143: "/Business.png",
  },

  {
    title: "Low-Code / No-Code Automation",
    desc: "We implement low-code and no-code automation platforms for rapid adoption, enabling businesses to automate faster with minimal complexity.",
    desc1: "Quick automation solutions for teams to build workflows, integrations, and business tools with speed and flexibility.",
    perc1: "82",
    perc2: "86",
    cont1: "Rapid workflow setup",
    cont2: "No-code integrations",
    cont11: "Faster business automation",
    cont12: "Reduced development time",
    para1:
      "Low-code/no-code automation services including workflow creation, integrations, trigger-based automations, dashboard creation, and process digitization for faster business execution.",
    para2:
      "We help companies adopt automation platforms that reduce development time and simplify business operations. Our approach ensures scalable automation while maintaining security, reliability, and performance across teams and departments.",
    img143: "/lowcode.png",
  },

  {
    title: "Enterprise Workflow Design",
    desc: "We design optimized enterprise workflows that improve collaboration, transparency, and scalability across departments and teams.",
    desc1: "Workflow strategies built for clarity, performance, and long-term operational growth in complex organizations.",
    perc1: "83",
    perc2: "87",
    cont1: "Workflow architecture planning",
    cont2: "Cross-team coordination flow",
    cont11: "Transparent process mapping",
    cont12: "Scalable execution models",
    para1:
      "Enterprise workflow design including process mapping, role-based workflow planning, approval chains, system integration, documentation, and scalable execution models.",
    para2:
      "We design workflows that reduce bottlenecks and enhance productivity. From department-level automation to full enterprise operations, our workflow models provide better traceability, transparency, and faster execution with reduced chaos.",
    img143: "/Workflow.png",
  },

  {
    title: "Performance Monitoring & Optimization",
    desc: "We monitor systems and workflows to identify performance gaps, ensure reliability, and enable continuous improvement across operations.",
    desc1: "Optimization services that increase speed, reduce downtime, and improve workflow efficiency for better performance output.",
    perc1: "85",
    perc2: "89",
    cont1: "Performance gap analysis",
    cont2: "Workflow efficiency tracking",
    cont11: "Optimization recommendations",
    cont12: "Continuous improvement cycles",
    para1:
      "Monitoring and optimization including system performance audits, workflow metrics tracking, automation improvements, bottleneck analysis, and continuous optimization planning.",
    para2:
      "We provide performance insights using monitoring dashboards, structured reports, and process analytics. With continuous optimization, we help businesses eliminate inefficiencies, improve automation success rates, and maintain consistent operational performance over time.",
    img143: "/Performance.png",
  },
    ],
  },

  // =======================================================
  // ✅ UI/UX DESIGN
  // =======================================================
  "uiux-design": {
    hero: {
      title1: "Creative",
      title2: "UI/UX Design",
      subtitle: "Design • Branding • Experience",
      para:
        "We design intuitive and visually engaging digital experiences that enhance user interaction and brand consistency.",
      service:"uiux-design"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
    title: "UI/UX Design",
    desc: "We create user-focused interfaces that prioritize usability, accessibility, and smooth navigation across all devices.",
    desc1: "Modern UI/UX design built to improve engagement, simplify user journeys, and deliver better digital experiences.",
    perc1: "90",
    perc2: "92",
    cont1: "User-first interface design",
    cont2: "Smooth navigation flow",
    cont11: "Accessibility & usability focus",
    cont12: "Better user engagement",
    para1:
      "UI/UX design services including wireframing, user research, prototype design, UI design systems, and interaction design—built for apps, websites, and digital platforms.",
    para2:
      "We focus on clarity, consistency, and user behavior. Our design process ensures your product looks modern and performs smoothly with clean layouts, strong hierarchy, and optimized user journeys that reduce friction and increase conversion.",
    img143: "/UIUX.png",
  },

  {
    title: "Branding & Logo Design",
    desc: "We craft unique brand identities and logos that reflect your values and build strong recognition in your market.",
    desc1: "Professional branding that creates trust, improves visibility, and communicates your business message clearly.",
    perc1: "88",
    perc2: "91",
    cont1: "Unique logo concepts",
    cont2: "Strong brand identity",
    cont11: "Modern visual guidelines",
    cont12: "Memorable brand presence",
    para1:
      "Branding services including logo design, brand identity systems, typography, color palettes, social branding kits, and brand guideline creation for consistent brand communication.",
    para2:
      "We design brands that stand out and stay consistent everywhere—website, apps, social media, packaging, and print. Our branding approach focuses on clarity and emotion, building a visual identity that people remember and trust.",
    img143: "/logo design.png",
  },

  {
    title: "Graphic Design",
    desc: "We deliver professional graphic designs for digital and print platforms that communicate messages clearly and effectively.",
    desc1: "Creative design solutions for marketing visuals, business branding, social media posts, posters, banners, and more.",
    perc1: "87",
    perc2: "89",
    cont1: "High-quality visual designs",
    cont2: "Digital & print creativity",
    cont11: "Marketing-ready graphics",
    cont12: "Clear message delivery",
    para1:
      "Graphic design services including flyers, posters, brochures, banners, social media creatives, presentations, and business materials—designed for clarity and impact.",
    para2:
      "Our graphics are crafted with balance, readability, and strong visual hierarchy. We ensure brand consistency and professional finishing so your content stands out across platforms while delivering your message clearly.",
    img143: "/GraphicDesign.png",
  },

  {
    title: "Mobile App UI Design",
    desc: "We design clean and intuitive mobile interfaces that improve usability, interaction flow, and user engagement.",
    desc1: "Mobile-first UI design that delivers smooth navigation, modern visuals, and better app experiences across devices.",
    perc1: "89",
    perc2: "91",
    cont1: "Mobile-first UI layouts",
    cont2: "Smooth app navigation",
    cont11: "Interactive user flow design",
    cont12: "Engaging app experience",
    para1:
      "Mobile UI design services including screen design, UI components, onboarding screens, interactive prototypes, navigation structure, and responsive layout systems.",
    para2:
      "We design mobile interfaces that feel simple and premium. Our app UI focuses on clarity, thumb-friendly UX, consistent components, and modern visuals—creating experiences that users enjoy and return to frequently.",
    img143: "/Mobile  UI.png",
  },
    ],
  },

  // =======================================================
  // ✅ DIGITAL MARKETING
  // =======================================================
  "digital-marketing": {
    hero: {
      title1: "Smart",
      title2: "Digital Marketing",
      subtitle: "Growth • Leads • Branding",
      para:
        "We run performance marketing strategies that increase traffic, leads and brand awareness with consistent reporting.",
      service:"digital-marketing"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
    title: "Search Engine Optimization (SEO)",
    desc: "We improve your website visibility on search engines like Google to drive consistent organic traffic and long-term growth.",
    desc1: "SEO strategies built for rankings, authority, and conversion—powered by audits, keyword optimization, and technical improvements.",
    perc1: "86",
    perc2: "90",
    cont1: "Higher Google rankings",
    cont2: "Organic traffic growth",
    cont11: "Technical SEO improvements",
    cont12: "Keyword & content optimization",
    para1:
      "SEO services including keyword research, on-page optimization, technical SEO audits, speed optimization, internal linking, local SEO, and performance tracking using analytics.",
    para2:
      "We follow modern SEO practices focused on long-term results. From website structure to content quality and technical performance, our optimization ensures better search visibility, stronger authority, and increased leads without relying only on paid ads.",
    img143: "/SEO.png",
  },

  {
    title: "Content Marketing",
    desc: "We create valuable content like blogs, videos, and landing pages that attract users, build trust, and convert visitors into customers.",
    desc1: "Content strategies designed to strengthen your brand voice, improve SEO results, and keep your audience engaged consistently.",
    perc1: "84",
    perc2: "88",
    cont1: "High-value content creation",
    cont2: "Build audience trust",
    cont11: "SEO-friendly publishing",
    cont12: "Brand authority growth",
    para1:
      "Content marketing services including blog writing, website content, video scripts, case studies, content calendars, SEO blogs, landing page copy, and conversion-focused messaging.",
    para2:
      "We focus on content that delivers results—not just words. Our strategy includes audience research, keyword planning, storytelling, and publishing consistency to improve traffic, engagement, and customer trust across your marketing funnel.",
    img143: "/Content.png",
  },

  {
    title: "Social Media Marketing",
    desc: "We promote your brand and engage with users through high-quality content and growth strategies on platforms like Instagram, Facebook, and LinkedIn.",
    desc1: "Social media strategies built for reach, engagement, and lead generation—supported with creative content and campaign execution.",
    perc1: "85",
    perc2: "90",
    cont1: "Increase brand engagement",
    cont2: "Creative content strategy",
    cont11: "Consistent posting plan",
    cont12: "Lead-focused campaigns",
    para1:
      "Social media marketing including content planning, reels strategy, post creation, page optimization, community engagement, paid campaigns, and monthly analytics reporting.",
    para2:
      "We build social profiles that look professional and convert attention into action. With consistent content and performance tracking, we help businesses grow followers, improve engagement, and generate real leads from social platforms.",
    img143: "/Social.png",
  },

  {
    title: "Email Marketing",
    desc: "We send targeted email campaigns to your subscribers to nurture leads, increase conversions, and strengthen customer retention.",
    desc1: "Email marketing built with segmentation, automation, and performance optimization for better opens, clicks, and sales.",
    perc1: "83",
    perc2: "87",
    cont1: "Targeted email campaigns",
    cont2: "Improve lead nurturing",
    cont11: "Automation & segmentation",
    cont12: "Better open & click rates",
    para1:
      "Email marketing services including subscriber list management, campaign creation, newsletters, automated flows, promotional emails, drip campaigns, and analytics tracking.",
    para2:
      "We design emails that look great and drive results. Our strategy includes segmentation, personalization, and automation to deliver the right message to the right audience at the right time—improving conversions and customer loyalty.",
    img143: "/Email.png",
  },

  {
    title: "Pay-Per-Click (PPC) Advertising",
    desc: "We run PPC ads on search engines and social platforms to generate leads quickly with better targeting and ROI-based optimization.",
    desc1: "Performance-driven campaigns built to control ad spend, reduce cost per lead, and improve conversions with measurable growth.",
    perc1: "88",
    perc2: "92",
    cont1: "High ROI paid campaigns",
    cont2: "Instant lead generation",
    cont11: "Smart audience targeting",
    cont12: "Conversion tracking & scaling",
    para1:
      "PPC services including Google Ads, Meta Ads, remarketing, campaign optimization, ad copywriting, landing page recommendations, lead tracking, and reporting dashboards.",
    para2:
      "We don’t just run ads—we optimize performance. From keyword targeting to creatives and retargeting, we continuously test and improve campaigns to maximize results while keeping cost per lead under control.",
    img143: "/Ads.png",
  },

  {
    title: "Influencer Marketing",
    desc: "We partner with influencers and online personalities to promote your products and build trust with targeted audiences.",
    desc1: "Influencer marketing campaigns designed for brand awareness, product reach, and authentic community engagement.",
    perc1: "82",
    perc2: "86",
    cont1: "Influencer collaborations",
    cont2: "Boost product awareness",
    cont11: "Targeted audience reach",
    cont12: "Authentic brand engagement",
    para1:
      "Influencer marketing services including influencer selection, campaign planning, content collaboration, product promotions, contract support, and campaign performance reporting.",
    para2:
      "We match brands with the right influencers based on niche, engagement, and audience quality. Our campaigns focus on authenticity and visibility—helping your brand gain trust faster and generate interest through real community influence.",
    img143: "/Influencer.png",
  },

  {
    title: "Mobile Marketing",
    desc: "We reach users through SMS, WhatsApp campaigns, mobile apps, and mobile-friendly strategies to drive direct engagement.",
    desc1: "Mobile-first campaigns built for fast communication, personalized offers, and improved customer interactions.",
    perc1: "81",
    perc2: "85",
    cont1: "SMS & WhatsApp campaigns",
    cont2: "Mobile-first targeting",
    cont11: "Direct customer engagement",
    cont12: "Personalized offers & alerts",
    para1:
      "Mobile marketing services including SMS marketing, WhatsApp marketing, app notification strategy, mobile landing pages, campaign scheduling, audience segmentation, and tracking.",
    para2:
      "Mobile marketing provides faster reach and higher engagement. We build campaigns that feel personal and timely—helping businesses increase conversions, promote offers, and improve communication through mobile-first marketing channels.",
    img143: "/MobileMarketing.png",
  },
    ],
  },

  // =======================================================
  // ✅ PUBLISHING SERVICES
  // =======================================================
  "publishing-services": {
    hero: {
      title1: "Global",
      title2: "Publishing Services",
      subtitle: "Ebooks • Layout • Formatting",
      para:
        "We deliver high-quality publishing solutions including formatting, conversion, proofreading and content enhancement for global standards.",
      service:"publishing-services"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
    title: "ePub Creation",
    desc: "We develop high-quality ePub files that work smoothly across all major eReaders, apps, and devices with consistent formatting.",
    desc1: "Professional ePub creation focused on clean structure, responsive layouts, and publishing-ready compatibility standards.",
    perc1: "90",
    perc2: "92",
    cont1: "Device-compatible ePub build",
    cont2: "Clean reflowable formatting",
    cont11: "Structured content packaging",
    cont12: "Publishing-ready output quality",
    para1:
      "ePub creation services including layout formatting, chapter structuring, metadata setup, interactive navigation (TOC), image optimization, and platform compatibility testing for Kindle, Apple Books, Kobo, and more.",
    para2:
      "We create ePub files with industry-standard structure and clean styling to ensure smooth reading across devices. Our workflow includes validation, rendering checks, and formatting consistency so publishers receive stable eBooks that meet commercial publishing standards.",
    img143: "/E-book.png",
  },

  {
    title: "ePub3 Accessibility",
    desc: "We build accessibility-compliant ePub3 publications that support inclusive reading experiences for all users.",
    desc1: "Accessible eBooks designed with semantic tagging, ARIA support, and proper navigation for screen readers and assistive tools.",
    perc1: "88",
    perc2: "91",
    cont1: "Inclusive ePub3 standards",
    cont2: "Screen reader optimization",
    cont11: "Semantic structure tagging",
    cont12: "WCAG-based compliance",
    para1:
      "ePub3 accessibility services including semantic markup, ARIA labeling, alt-text handling, accessibility metadata, proper heading structure, and validation for assistive reading compatibility.",
    para2:
      "We follow best practices for accessibility compliance to ensure readable and navigable eBooks for users with disabilities. Our process includes semantic structuring, proper landmarks, and accessibility audits—making sure every publication meets inclusive publishing requirements.",
    img143: "/e-pub.png",
  },

  {
    title: "XML & HTML Conversion",
    desc: "We convert publishing content into structured XML and HTML formats with accuracy for archiving, multi-channel publishing, and reuse.",
    desc1: "Reliable conversion workflows that maintain content integrity, hierarchy, and clean structural formatting.",
    perc1: "86",
    perc2: "89",
    cont1: "Structured XML output",
    cont2: "Clean HTML formatting",
    cont11: "Accurate content hierarchy",
    cont12: "Archiving-ready conversion",
    para1:
      "XML & HTML conversion services including tagging, structural mapping, formatting cleanup, metadata handling, and validation—supporting publishing systems, repositories, and digital libraries.",
    para2:
      "We ensure every conversion maintains correct structure, reading order, and content accuracy. Our workflow supports complex layouts, tables, footnotes, and multi-level content structures with clean output ready for publishing and long-term archiving.",
    img143: "/XMLPUB.png",
  },

  {
    title: "PDF to ePub Conversion",
    desc: "We convert PDF files into reflowable and accessible ePub formats while maintaining layout integrity and reading clarity.",
    desc1: "Accurate conversion from fixed-layout PDF into clean eBook structure optimized for digital reading platforms.",
    perc1: "87",
    perc2: "90",
    cont1: "PDF to reflowable ePub",
    cont2: "Maintain layout consistency",
    cont11: "Clean chapter structuring",
    cont12: "Optimized reading experience",
    para1:
      "PDF to ePub conversion services including text extraction, structure rebuilding, style formatting, image placement, navigation (TOC), accessibility checks, and final validation for platform compatibility.",
    para2:
      "We convert PDFs into properly structured ePub files that look clean and read smoothly on mobile, tablet, and eReaders. Our process carefully rebuilds hierarchy, fixes formatting issues, and optimizes content flow to ensure a professional-quality eBook output.",
    img143: "/PDF.png",
  },

  {
    title: "Publishing Quality Assurance",
    desc: "We perform comprehensive QA checks to ensure your publications are error-free, consistent, and fully standards-compliant.",
    desc1: "Multi-stage publishing validation covering formatting accuracy, device compatibility, accessibility, and metadata integrity.",
    perc1: "92",
    perc2: "94",
    cont1: "Multi-level quality validation",
    cont2: "Formatting error detection",
    cont11: "Standards compliance audit",
    cont12: "Device compatibility testing",
    para1:
      "Publishing QA services including ePub validation, layout review, cross-device testing, metadata checks, link validation, font verification, and accessibility audit for reliable output.",
    para2:
      "Our QA process ensures books meet publishing standards and avoid reader experience issues. We identify formatting defects, structure errors, and compatibility problems through detailed checks—delivering stable publications suitable for distribution platforms.",
    img143: "/Publishing-quality.png",
  },
    ],
  },

  // =======================================================
  // ✅ BPO
  // =======================================================
  "bpo": {
    hero: {
      title1: "Scalable",
      title2: "BPO Services",
      subtitle: "Support • Operations • Growth",
      para:
        "We provide reliable outsourcing services that reduce costs and improve efficiency — helping companies focus on core growth.",
      service:"bpo"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
    title: "Customer Support Services",
    desc: "We deliver professional customer support through email, chat, and voice processes to improve customer satisfaction and retention.",
    desc1: "Trained support executives with clear communication and process handling to ensure better customer experience.",
    perc1: "87",
    perc2: "91",
    cont1: "Email & chat support",
    cont2: "Voice process handling",
    cont11: "Customer satisfaction focus",
    cont12: "Fast response management",
    para1:
      "Customer support outsourcing including inbound/outbound calls, chat support, email support, complaint resolution, ticketing systems, and customer issue handling workflows.",
    para2:
      "We support your customers with professionalism and speed. Our trained teams follow proper scripts, SOPs, and quality processes—ensuring accurate issue resolution, better customer experience, and consistent communication.",
    img143: "/CustomerService.jpg",
  },

  {
    title: "Data Entry & Data Processing",
    desc: "We provide high-accuracy data entry and processing services for business documentation, records, and system updates.",
    desc1: "Structured data handling with validation and multi-stage checks to ensure error-free output and faster turnaround.",
    perc1: "90",
    perc2: "94",
    cont1: "Accurate data entry",
    cont2: "Fast processing output",
    cont11: "Validation & error checking",
    cont12: "Secure data handling",
    para1:
      "Data entry services including document digitization, CRM updates, Excel processing, form filling, database management, invoice entry, and structured data conversion workflows.",
    para2:
      "We ensure clean and accurate data with strict validation rules, review workflows, and quality assurance. Our team handles large volumes of information securely while maintaining speed and accuracy for business operations and reporting needs.",
    img143: "/DataEntry.jpg",
  },

  {
    title: "Back Office Operations",
    desc: "We manage back-office workflows like documentation, reporting, verification, and internal task handling to improve business efficiency.",
    desc1: "Operational support services that reduce workload, improve control, and ensure smooth daily execution.",
    perc1: "86",
    perc2: "90",
    cont1: "Back-office task handling",
    cont2: "Operational workflow support",
    cont11: "Documentation & reporting",
    cont12: "Process monitoring & control",
    para1:
      "Back-office outsourcing including document processing, verification, reporting, record updates, internal support tasks, and daily operational workflow assistance.",
    para2:
      "We help businesses run smoother by managing time-consuming tasks with accuracy and structure. With standard operating procedures and quality checks, our back-office teams reduce delays, improve documentation clarity, and enhance overall productivity.",
    img143: "/office_team_FHD.jpg",
  },
    ],
  },

  // =======================================================
  // ✅ TRAINING & CONSULTANT
  // =======================================================
  "training-consultant": {
    hero: {
      title1: "Industry",
      title2: "Training & Consultant",
      subtitle: "Skills • Support • Career",
      para:
        "We provide industry-oriented training and consulting programs that build practical, job-ready skills aligned with current market trends.",
      service:"training-consultant"
    },
    slides: [
      { bg: "/serbg.jpg", men: "/men21.png" },
      { bg: "/serbg2.png", men: "/women21.png" },
    ],
    tabs: [
      {
  title: "Main Framework",
  desc: "We provide a structured publishing framework that ensures smooth production, accurate formatting, and standards-compliant digital publication delivery.",
  desc1: "A complete workflow model covering creation, conversion, accessibility, validation, and quality assurance for professional publishing output.",
  perc1: "92",
  perc2: "95",
  cont1: "Structured publishing workflow",
  cont2: "Standards-based production",
  cont11: "Accessibility-first delivery",
  cont12: "Quality assurance & validation",
  para1:
    "Main framework includes end-to-end publishing workflow services such as ePub creation, PDF-to-ePub conversion, XML & HTML conversion, ePub3 accessibility compliance, metadata structuring, TOC setup, file validation, and cross-device testing.",
  para2:
    "Our publishing framework follows professional standards to ensure every publication is accurate, clean, and platform-ready. We focus on structured content formatting, accessibility compliance, and multi-stage QA checks to reduce errors and deliver consistent, high-quality output across all major reading devices and publishing platforms.",
  img143: "/Main.jpg",
},
      {
    title: "Python Development Training",
    desc: "Hands-on Python training with real-world projects to strengthen core programming fundamentals and problem-solving skills.",
    desc1: "Industry-focused Python learning with practical assignments, coding tasks, and project-based development experience.",
    perc1: "90",
    perc2: "92",
    cont1: "Hands-on Python practice",
    cont2: "Strong coding fundamentals",
    cont11: "Real-world project training",
    cont12: "Problem-solving improvement",
    para1:
      "Python training programs covering basics to advanced topics such as OOP, file handling, automation scripting, API usage, and real-time mini projects—designed for beginners and intermediate learners.",
    para2:
      "Our training focuses on practical development rather than theory. Learners work on real-world tasks, follow structured learning paths, and gain the confidence to build Python-based solutions for automation, backend development, and data processing.",
    img143: "/pythonTraining.jpg",
  },

  {
    title: "Full Stack Development Training",
    desc: "Comprehensive training covering front-end and back-end technologies with real-time applications and live project experience.",
    desc1: "A complete learning path for building modern web applications with responsive UI, backend logic, and database connectivity.",
    perc1: "88",
    perc2: "91",
    cont1: "Frontend + backend learning",
    cont2: "Build real web applications",
    cont11: "Database & API integration",
    cont12: "Industry-ready full stack skills",
    para1:
      "Full stack training including HTML, CSS, JavaScript, React/Next.js, backend development, databases, REST APIs, authentication, and deployment—supported with real-time projects.",
    para2:
      "Learners gain complete product-building skills from UI creation to backend logic. With hands-on projects and real-time implementation, this program prepares candidates for full stack roles in startups, agencies, and product companies.",
    img143: "/FullStackTraining.jpg",
  },

  {
    title: "AI & Machine Learning Training",
    desc: "Structured learning programs focused on AI and machine learning concepts with practical implementation and real-world datasets.",
    desc1: "Hands-on ML training including model building, evaluation, deployment basics, and AI project experience.",
    perc1: "86",
    perc2: "89",
    cont1: "Learn ML concepts clearly",
    cont2: "Hands-on model building",
    cont11: "Real dataset implementation",
    cont12: "Practical AI project training",
    para1:
      "AI & ML training covering data preprocessing, supervised/unsupervised learning, model evaluation, feature engineering, and basic deployment workflow using Python tools and libraries.",
    para2:
      "This program is designed to help learners understand AI practically. With guided projects and structured concepts, candidates gain confidence to implement ML models, test performance, and apply AI methods to real-world business problems.",
    img143: "/AI&machine.jpg",
  },

  {
    title: "Data Analytics & Engineering Training",
    desc: "Skill-based training in data analysis, processing, and engineering tools to prepare learners for data-driven roles.",
    desc1: "Practical training focused on analytics workflows, data transformation, reporting, and engineering fundamentals.",
    perc1: "85",
    perc2: "88",
    cont1: "Data analysis skills training",
    cont2: "Processing & transformation",
    cont11: "Engineering workflow basics",
    cont12: "Job-ready data expertise",
    para1:
      "Data analytics & engineering training including data cleaning, visualization, reporting, ETL basics, SQL, analytics tools, and structured datasets—designed for analytics roles and data careers.",
    para2:
      "Learners work on real datasets and gain end-to-end skills in data handling. From analysis to transformation workflows, this training builds strong foundational knowledge needed for analytics, reporting, and entry-level data engineering roles.",
    img143: "/DataAnalytics.jpg",
  },

  {
    title: "HTML & CSS Training",
    desc: "Foundational training for building responsive and accessible web interfaces using modern HTML and CSS techniques.",
    desc1: "Learn frontend basics with hands-on tasks, UI building practice, and responsive design projects.",
    perc1: "92",
    perc2: "94",
    cont1: "Responsive UI development",
    cont2: "Modern CSS layouts",
    cont11: "Accessible web design",
    cont12: "Strong frontend foundation",
    para1:
      "HTML & CSS training including semantic HTML, responsive grids, flexbox, animations, accessibility basics, and modern UI layout practices with real-time design tasks.",
    para2:
      "This program strengthens web UI foundations through hands-on practice. Learners build complete page layouts, responsive sections, and modern components — gaining confidence to design and develop clean, professional front-end interfaces.",
    img143: "/HTML&CSS.png",
  },

  {
    title: "XML & ePub Training",
    desc: "Specialized training in XML and ePub standards for publishing, formatting, and compliance requirements.",
    desc1: "Hands-on learning for structured publishing workflows including validation rules and document compliance handling.",
    perc1: "83",
    perc2: "87",
    cont1: "XML structure learning",
    cont2: "ePub formatting standards",
    cont11: "Publishing compliance training",
    cont12: "Validation & conversion workflow",
    para1:
      "XML & ePub training including XML tagging, structured data formatting, metadata handling, EPUB standards, validation processes, and publishing workflow best practices.",
    para2:
      "Learners gain practical knowledge in publishing compliance and structured document handling. This program helps candidates work on real-world publishing workflows where XML structuring and EPUB formatting accuracy are critical.",
    img143: "/XML&E-PUB.png",
  },

  {
    title: "Internship Programs",
    desc: "Real-time internship opportunities with live projects and expert mentorship to prepare candidates for professional careers.",
    desc1: "Work on industry-based tasks with structured guidance, practical exposure, and skill-building mentorship support.",
    perc1: "91",
    perc2: "94",
    cont1: "Work on live projects",
    cont2: "Expert mentorship support",
    cont11: "Real industry exposure",
    cont12: "Career-ready training path",
    para1:
      "Internship programs including real-time projects, task-based learning, code reviews, mentorship, professional workflow exposure, and hands-on team collaboration experience.",
    para2:
      "Our internship programs are designed to bridge the gap between learning and industry work. Candidates gain practical experience through live projects, structured mentorship, and real development workflows—helping them become job-ready with confidence.",
    img143: "/uiux-training.jpg",
  },
    ],
  },
};
