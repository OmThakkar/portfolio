import favv from "../assets/favv.png"
// import favvDark from "../assets/favv-dark.gif"
import myvenue from "../assets/myvenue.gif"
import myvenueDark from "../assets/myvenue-dark.gif"
// import retrievo from "../assets/retrievo.gif"
// import retrevoDark from "../assets/retrievo-dark.gif"
import irene from "../assets/irene.gif"
import ireneDark from "../assets/irene-dark.gif"
import eight from "../assets/800.gif"
import eightDark from "../assets/800-dark.gif"
// import whistlingWilds from "../assets/whistling-wilds.gif"
// import whistlingWildsDark from "../assets/whistling-wilds-dark.gif"
// import fireball from "../assets/fireball.gif"
// import fireballDark from "../assets/fireball-dark.gif"
import { SiHtml5, SiTailwindcss, SiDjango, SiJavascript, SiFigma, SiFastapi, SiOpenai, SiGreensock, SiAmazonwebservices, SiGooglegemini, SiReact, SiBootstrap, SiPhonepe, SiWhatsapp } from "react-icons/si"
import { MdOutlineMailOutline } from "react-icons/md";

const projects = [
  {
    title: "Irene",
    heroImage: irene,
    heroDarkImage: ireneDark,
    overview: "Irene is a comprehensive mental wellness application designed to provide holistic support for users' psychological well-being. By integrating advanced AI technologies, the platform offers a multifaceted approach to mental health management. Users can access innovative tools such as AI-powered chat support, intelligent call interfaces, smart AI journaling, and generative therapy sessions. The community feature fosters connection and support, while the daily mental health tracking enables users to maintain consistent self-awareness.Sound therapy modules provide additional relaxation and stress management techniques. By combining cutting-edge technology with empathetic design, Irene creates a supportive digital ecosystem that empowers individuals to proactively manage and improve their mental health.",
    colorsUsed: ["#222222", "#272537", "#A0ACFF", "#EDF0FF", "#FFFFFF"],
    fontsUsed: ["DM Sans &", "DM Serif Display"],
    techStack: [
      { name: "React", icon: SiReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Google Gemini API", icon: SiGooglegemini },
      { name: "OpenAI API", icon: SiOpenai },
      { name: "AWS", icon: SiAmazonwebservices }
    ],
    duration: "July 2024 - August 2024",
    liveLink: "https://irene-demo.netlify.app/templates/home",
    fontSelection: "DM Sans was strategically chosen as the primary font for its exceptional readability and modern character, ensuring users can easily engage with mental wellness content across all devices and screen sizes. The inclusion of DM Serif Display for headings creates a deliberate typographic hierarchy that guides users naturally through different sections of the application while adding a touch of sophistication. The font pairing creates an intentional contrast between the approachable body text and elegant headings, reflecting the platform's blend of professional expertise and personal care. DM Sans's clean letterforms and balanced proportions help reduce cognitive load during extended reading sessions, particularly important for users engaging with therapeutic content. The combination of these fonts supports the application's goal of providing a calming digital environment while maintaining clear communication of mental health resources and guidance. The flexibility of both font families across different weights allows for subtle emphasis and clear information hierarchy without disrupting the overall peaceful aesthetic of the platform.",
    colorSelection: "The color palette was meticulously crafted with dark navy (#272537) as the foundation, establishing a sense of stability and professionalism while creating a cocoon-like feeling of safety for users. The soft purple accent (#A0ACFF) was introduced to evoke feelings of healing and creativity, colors traditionally associated with mental wellness and meditation practices. Pure white (#FFFFFF) and light purple (#EDF0FF) backgrounds were implemented to ensure maximum readability while creating a sense of spaciousness that helps users feel less overwhelmed. The deep charcoal (#222222) provides strong contrast for important text elements while being gentler on the eyes than pure black, reducing visual stress during extended use. The gradient transitions between these colors create smooth, calming visual flows that mirror the gentle, supportive nature of the platform's mental health journey. The overall palette works harmoniously to create an environment that feels both professional and nurturing, essential for a mental wellness application.",
    techStackSelection: "The technology stack was carefully curated to create a robust, scalable mental wellness platform, with React serving as the foundation for its component-based architecture and efficient state management. TailwindCSS was chosen for rapid UI development and consistent styling, while FastAPI provides the high-performance backend necessary for real-time AI interactions. The integration of Google Gemini API and OpenAI API enables sophisticated natural language processing and AI-driven therapy features, ensuring intelligent and empathetic user interactions. AWS infrastructure provides the scalability and reliability required for handling sensitive mental health data and ensuring consistent service availability. The combination of these technologies creates a powerful ecosystem that supports both the technical requirements and ethical considerations of a mental health platform, while ensuring smooth, responsive user experiences.",
  },
  {
    title: "Favv",
    heroImage: favv,
    heroDarkImage: favv,
    overview: "Favv is an innovative US-based product designed specifically for small business owners and creators to streamline their client feedback collection process. As both the product designer and developer, I crafted a comprehensive platform that allows entrepreneurs to easily gather and showcase authentic testimonials from their clients, customers, and audience.The platform provides an intuitive interface that simplifies the testimonial collection workflow, enabling businesses to build trust and credibility through genuine client experiences. By integrating modern design principles with functional technology, Favv empowers small businesses to leverage the power of social proof and enhance their marketing strategies.",
    colorsUsed: ["#111827", "#1F2937", "#673AB7", "#FAF8FF", "#FFFFFF",],
    fontsUsed: ["Montserrat"],
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Figma", icon: SiFigma },
    ],
    duration: "February 2024 - May 2024",
    liveLink: "https://favv-dashboard.netlify.app/src/dashboard.html",
    fontSelection: "Montserrat was strategically selected as the sole typeface for its versatility and contemporary character, providing a consistent and professional appearance across the testimonial platform. The font's geometric nature ensures exceptional legibility at various sizes, crucial for displaying client testimonials and user interface elements effectively. Its clean and modern appearance helps establish credibility and trust, essential qualities for a platform handling business testimonials and social proof. The multiple weight options within the Montserrat family enable clear visual hierarchy while maintaining brand consistency throughout the interface. The font's professional yet approachable character aligns perfectly with the platform's goal of helping businesses showcase authentic customer experiences. The consistent use of a single typeface family creates a cohesive visual experience that keeps the focus on the testimonial content rather than competing design elements.",

    colorSelection: "The color scheme combines sophisticated dark tones (#111827, #1F2937) with a distinctive purple accent (#673AB7) to create a unique and memorable brand identity that stands out in the business tools market. The dark colors establish authority and professionalism while providing an excellent backdrop for highlighting testimonial content and important interface elements. The purple accent adds a creative and innovative touch, differentiating Favv from traditional business platforms while maintaining a professional appearance. The inclusion of white (#FFFFFF) and light purple (#FAF8FF) creates essential contrast and breathing room, ensuring testimonials remain highly readable and engaging. The careful balance between dark and light tones helps guide users through the interface while maintaining a premium feel appropriate for business users. The overall palette strikes a perfect balance between corporate trustworthiness and modern sophistication, essential for a platform focused on building credibility through customer testimonials.",

    techStackSelection: "The technology stack was intentionally kept minimal yet powerful, focusing on core web technologies that ensure maximum reliability and performance for business users. HTML5 provides the semantic structure necessary for excellent SEO and accessibility, crucial for a platform that needs to be easily discoverable by potential business users. TailwindCSS enables rapid development of a consistent and professional interface while ensuring optimal performance through its utility-first approach. JavaScript adds essential interactivity and smooth animations, enhancing the user experience without compromising load times or performance. The integration of Figma in the development process enabled precise design implementation and efficient collaboration between design and development teams, ensuring a pixel-perfect final product. The combination of these technologies creates a lean yet powerful stack that prioritizes performance, reliability, and ease of maintenance.",
  },
  {
    title: "MyVenue",
    heroImage: myvenue,
    heroDarkImage: myvenueDark,
    overview: "MyVenue is a transformative product designed to revolutionize the efficiency and productivity of banquet management. Recognizing the complex operational challenges faced by banquet owners, I developed a comprehensive website that showcases the platform's innovative features and tangible benefits.The project's primary goal was to create a compelling digital narrative that highlights how MyVenue can streamline venue operations, optimize resource management, and enhance overall business performance. By presenting a clear, engaging visual story, the website serves as a powerful marketing tool that communicates the platform's value proposition to potential banquet owner clients, demonstrating how technology can simplify and elevate their business management processes.",
    colorsUsed: ["#434343", "#990033", "#FFCCCC", "#E5E7EB", "#F4F3EF"],
    fontsUsed: ["Lexend"],
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "EmailJS", icon: MdOutlineMailOutline },
      { name: "GSAP", icon: SiGreensock }
    ],
    duration: "April 2024 - May 2024",
    liveLink: "https://myvenuewebsite.netlify.app/src/index.html",
    fontSelection: "Lexend was purposefully chosen for its exceptional readability optimizations, making it perfect for busy banquet managers who need to quickly scan and process complex venue information. The font's carefully calibrated letter spacing and clean design significantly reduce cognitive load, enabling faster reading and better retention of critical venue management details. Its comprehensive range of weights provides the necessary flexibility for creating clear hierarchical organization of complex data while maintaining visual consistency. The modern character of the font aligns perfectly with the platform's innovative approach to digital banquet management solutions. Lexend's excellent performance across different screen sizes ensures that venue information remains legible whether accessed from a desktop during detailed planning or mobile device during event execution. The font's professional yet approachable nature helps create an interface that feels both sophisticated and accessible, essential for a tool used in the luxury hospitality sector.",

    colorSelection: "The color palette artfully combines professional grays (#434343, #E5E7EB) with a bold burgundy (#990033) and soft pink (#FFCCCC) to create a sophisticated atmosphere that resonates with the luxury banquet industry. The burgundy serves as a powerful accent color that conveys elegance and premium service, essential qualities in the high-end event management sector. The soft pink adds a warm, welcoming touch that connects with the celebratory nature of events while maintaining professional sophistication. The neutral gray tones provide structure and professionalism, ensuring the interface remains business-appropriate while showcasing venue information. The refined background (#F4F3EF) creates a premium canvas that enhances content visibility while maintaining an upscale appearance suitable for luxury venue management. This thoughtfully curated combination effectively communicates both professional reliability and celebratory elegance, perfect for the banquet management industry.",

    techStackSelection: "The technology stack was specifically chosen to create a high-performance, visually engaging platform that meets the demanding needs of modern banquet management. HTML5 provides a robust foundation with semantic markup that ensures accessibility and SEO optimization, crucial for reaching potential venue clients. TailwindCSS enables the creation of a sophisticated, responsive interface that maintains consistency across all device sizes while ensuring optimal performance. JavaScript powers smooth animations and interactive features that enhance the user experience and showcase venue capabilities effectively. The integration of EmailJS facilitates seamless communication between venues and clients, while GSAP adds premium-quality animations that elevate the platform's professional presentation. This carefully selected combination of technologies creates a powerful yet efficient stack that delivers both the performance and polish expected in the luxury banquet sector.",
  },
  {
    title: "Retrievo",
    heroImage: irene,
    heroDarkImage: irene,
    overview: "Retrievo represents a groundbreaking AI-powered multi-source retrieval tool developed with cutting-edge technologies. Backed by Worqhat company, this innovative platform provides users with an unprecedented ability to retrieve information from diverse data sources, including Excel files, images, PDFs, and Word documents.The tool's most distinctive feature is its 'magic summary' capability, which generates concise summaries and identifies key keywords, enabling users to quickly grasp essential information. Integrating advanced AI technologies, Retrievo supports both voice input and output, making information retrieval an intuitive and seamless experience.By bridging multiple data formats and leveraging artificial intelligence, the platform transforms how professionals and researchers access and analyze complex information.",
    colorsUsed: ["#111827", "#1F2937", "#5850EC", "#F3F4F6", "#FFFFFF"],
    fontsUsed: ["UI Sans Serif"],
    techStack: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "OpenAI", icon: SiOpenai }
    ],
    duration: "April 2024 - June 2024",
    liveLink: "https://retrievo-demo.netlify.app/src/home.html",
    fontSelection: "UI Sans Serif was strategically chosen for its exceptional clarity and universal compatibility, ensuring consistent rendering across different platforms and devices used in research environments. The font's neutral yet professional character helps users focus on the content rather than the interface, reducing cognitive load during intensive data retrieval sessions. Its clean letterforms and generous spacing enhance readability of complex information and search results, crucial for a tool handling diverse data formats. The font's modern appearance aligns with the platform's innovative approach to multi-source information retrieval while maintaining professional credibility. The consistent rendering across operating systems ensures that all users have the same high-quality experience regardless of their device or platform. The font's flexibility across different weights and sizes enables clear information hierarchy without compromising the interface's clean, focused design.",

    colorSelection: "The color palette employs a sophisticated dark theme (#111827, #1F2937) complemented by an energetic blue accent (#5850EC) to create an interface that balances professionalism with technological innovation. The dark background colors were carefully chosen to reduce eye strain during extended research sessions while creating a focused environment for data analysis. The vibrant blue accent serves as both a functional highlighting element and a visual representation of the platform's intelligent capabilities. The light gray and white elements (#F3F4F6, #FFFFFF) provide essential contrast for clear data visualization and content readability, crucial for processing complex information. The careful balance between dark and light elements creates clear visual hierarchies that guide users through the interface naturally. The overall color scheme works together to create an environment that feels both sophisticated and highly functional, perfect for a professional research tool.",

    techStackSelection: "The technology stack was meticulously selected to create a powerful, efficient data retrieval system that could handle multiple file formats and complex queries seamlessly. FastAPI was chosen as the backend framework for its exceptional performance and async capabilities, crucial for handling multiple simultaneous data source connections and queries. TailwindCSS provides a responsive and consistent interface that adapts seamlessly to different screen sizes and user preferences, while maintaining optimal performance. The integration of OpenAI technologies enables sophisticated natural language processing and intelligent data analysis, powering the platform's advanced search and summary capabilities. The tech stack's focus on performance and scalability ensures quick response times even when processing large datasets or complex queries. This combination of technologies creates a robust foundation for handling diverse data sources while maintaining a smooth, responsive user experience."
  },
  {
    title: "800Doctors",
    heroImage: eight,
    heroDarkImage: eightDark,
    overview: "The 800 Doctors website redesign was a strategic project aimed at redefining the digital presence of a premier Dubai-based on-call medical service. Collaborating closely with a UI designer, the goal was to create a website that not only showcases the service's accessibility but also communicates the trust, luxury, and professionalism inherent in their healthcare offerings.By carefully crafting the user interface and experience, we developed a platform that reflects the high-end nature of 800 Doctors' home and hotel medical consultation services. The website serves as a powerful digital ambassador, instantly conveying the brand's commitment to exceptional, convenient, and personalized medical care through a sophisticated and user-friendly design.",
    colorsUsed: ["#0675FF", "#F7FAFF", "#FFFFFF"],
    fontsUsed: ["Poppins"],
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Django", icon: SiDjango },
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "WhatsApp API", icon: SiWhatsapp }
    ],
    duration: "August 2024 - November 2024",
    liveLink: "https://www.800doctor.com/",
    fontSelection: "Poppins was carefully selected for its modern, geometric style that perfectly balances medical professionalism with approachability, essential for a premium healthcare service. The font's rounded characters create a friendly, welcoming atmosphere while maintaining the authority expected in medical communications. Its excellent legibility across different sizes ensures critical medical information is clearly communicated across all devices and platforms. The comprehensive weight range allows for clear information hierarchy while maintaining visual consistency throughout the platform. The font's contemporary nature helps position 800 Doctors as a modern, innovative medical service provider in the competitive Dubai healthcare market. The clean, precise character of Poppins reinforces the brand's commitment to excellence in medical care while ensuring accessibility to a diverse international audience.",

    colorSelection: "The color palette focuses on a medical blue (#0675FF) combined with crisp whites (#FFFFFF) and soft blue tints (#F7FAFF) to create a clean, professional healthcare environment that reflects the premium nature of the service. The dominant blue color was carefully chosen to represent trust, reliability, and healthcare excellence, essential qualities for a high-end medical service provider. The white space creates a sense of cleanliness and precision expected in premium medical services, while providing optimal contrast for important medical information. The soft blue tints add depth and sophistication to the interface while maintaining the medical professional aesthetic. The limited color palette ensures a focused, distraction-free environment that puts patients at ease while conveying medical expertise. This refined color scheme effectively communicates the brand's commitment to providing exceptional medical care while ensuring maximum readability of critical information.",

    techStackSelection: "The technology stack was strategically chosen to create a robust, secure platform capable of handling sensitive medical information while providing a seamless experience for both patients and healthcare providers. HTML5 and TailwindCSS work together to create a responsive, accessible interface that adapts perfectly to both desktop and mobile devices, essential for emergency medical services. Django was selected as the backend framework for its robust security features and excellent handling of sensitive healthcare data, crucial for maintaining patient confidentiality. The integration of AWS ensures reliable, scalable infrastructure capable of handling high-traffic loads while maintaining strict healthcare compliance standards. WhatsApp API integration enables instant communication between patients and medical staff, crucial for emergency response and follow-up care. This carefully selected combination of technologies creates a secure, efficient platform that meets the demanding requirements of premium healthcare services."
  },
  {
    title: "Whistling Wilds",
    heroImage: irene,
    heroDarkImage: irene,
    overview: "Whistling Wilds is an innovative tour management platform developed for Mr. Ashish Inamdar, designed to streamline and automate the entire tour organization and booking process. The platform provides a comprehensive solution that covers every aspect of tour management, from initial tour selection to final payment.Users can explore various tours, view detailed information, and complete their entire booking journey seamlessly. Beyond the core booking functionality, the platform also features engaging blog content, an integrated shop for tour-related merchandise, and educational tutorials.By combining robust technological infrastructure with user-friendly design, Whistling Wilds transforms how tour enthusiasts discover, select, and participate in organized travel experiences.",
    colorsUsed: ["#13281B", "#163020", "#FAFAFA"],
    fontsUsed: ["Montserrat &", "Open Sans"],
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "BootstrapCSS", icon: SiBootstrap },
      { name: "Django", icon: SiDjango },
      { name: "PhonePe Payment Gateway", icon: SiPhonepe }
    ],
    duration: "July 2023 - Ongoing",
    liveLink: "https://www.whistlingwilds.com",
    fontSelection: "The combination of Montserrat and Open Sans was strategically chosen to create a perfect balance between adventure and professionalism in the tour management platform. Montserrat's strong, geometric characters are used for headings to capture the bold spirit of outdoor exploration while maintaining clarity and authority. Open Sans provides exceptional readability for detailed tour information and blog content, ensuring that crucial trip details are easily digestible. Together, these fonts create a clear hierarchy that guides users through the content while maintaining an adventurous yet trustworthy atmosphere. The fonts' excellent performance across different screen sizes ensures consistent readability on all devices, crucial for travelers accessing information on the go. The pairing works harmoniously to create an interface that feels both exciting and reliable, essential qualities for a tour management platform.",

    colorSelection: "The color palette utilizes deep forest greens (#13281B, #163020) to establish a strong connection with nature and outdoor adventures, immediately setting the tone for the tour management platform. These rich green tones evoke feelings of exploration and wilderness while maintaining the professionalism needed for a booking platform. The light background (#FAFAFA) ensures optimal readability of tour details and booking information while creating a fresh, clean appearance that doesn't compete with tour imagery. The careful balance between the deep greens and light background creates a perfect canvas for showcasing tour photographs and important booking information. The limited color palette ensures a focused, distraction-free booking experience while maintaining the platform's connection to nature and adventure. This nature-inspired combination effectively communicates both the adventurous spirit of the tours and the professionalism of the booking platform.",

    techStackSelection: "The technology stack was carefully selected to create a reliable, efficient tour management system that could handle complex booking workflows while maintaining excellent performance. HTML5 provides a solid foundation for accessibility and SEO optimization, crucial for attracting potential adventure seekers through organic search. Bootstrap CSS was chosen for its robust grid system and pre-built components, enabling rapid development of a consistent, responsive interface that works seamlessly across all devices. Django powers the backend, providing secure user authentication and robust booking management capabilities essential for a tour operations platform. The integration of the PhonePe payment gateway ensures secure, reliable payment processing for Indian customers while maintaining PCI compliance. This combination of technologies creates a stable, efficient platform that handles everything from tour discovery to final booking confirmation."
  },
  {
    title: "Fireball",
    heroImage: irene,
    heroDarkImage: irene,
    overview: "The Fireball project was a comprehensive digital solution for an innovative product with fire-extinguishing capabilities, serving clients in India and Dubai. The website was meticulously designed to present a clean, modern, and dynamically animated platform that showcases the product's unique features.Key objectives included creating an engaging digital presence that highlights the product's specifications, demonstrates its effectiveness through video content, and provides social proof via customer testimonials. The integrated contact form enables seamless customer interaction and order placement.By combining elegant design, smooth animations, and functional features like WhatsApp integration, the website effectively communicates the product's value proposition and facilitates direct customer engagement.",
    colorsUsed: ["#0F0F11", "#ED4541", "#FCFCFC"],
    fontsUsed: ["Avenir"],
    techStack: [
      { name: "HTML", icon: SiHtml5 },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Django", icon: SiDjango },
      { name: "EmailJS", icon: MdOutlineMailOutline },
      { name: "WhatsApp API", icon: SiWhatsapp }
    ],
    duration: "May 2024 - July 2024",
    liveLink: "https://fire-ball.in",
    fontSelection: "Avenir was carefully selected for its clean, modern appearance that perfectly balances professionalism with innovation in the fire safety industry. The font's geometric structure and excellent readability make it ideal for communicating critical safety information and product specifications across all platform materials. Its versatile weight range allows for clear information hierarchy while maintaining a consistent, professional look throughout the interface. The font's modern character helps position Fireball as an innovative solution in the fire safety industry while ensuring that technical specifications and safety information are easily comprehensible. Avenir's excellent performance across different languages makes it perfect for serving both Indian and Dubai markets, ensuring consistent brand communication across regions. The font's clean, precise character reinforces the product's commitment to reliability and excellence in fire safety equipment.",

    colorSelection: "The color scheme combines a deep, professional black (#0F0F11) with a powerful red accent (#ED4541) to create a strong, memorable brand identity that immediately connects with fire safety equipment. The red color serves both as a brand element and as an intuitive indicator of fire-related products, creating immediate recognition and urgency when needed. The bright white (#FCFCFC) provides maximum contrast for critical product information and safety details, ensuring that vital information is easily readable. The limited color palette ensures a focused, distraction-free experience that keeps attention on crucial product information and safety features. The combination of colors creates a perfect balance between professional authority and emergency readiness, essential for a fire safety product. This bold yet professional color combination helps the product stand out in the market while maintaining the seriousness expected in fire safety equipment.",

    techStackSelection: "The technology stack was meticulously chosen to create a high-performance platform that effectively showcases critical fire safety product information while ensuring reliability and accessibility. HTML5 and TailwindCSS work together to create a responsive, accessible interface that adapts seamlessly to different devices and screen sizes, crucial for emergency information access. JavaScript powers smooth animations and interactive features that effectively demonstrate product capabilities and safety features to potential clients. Django provides robust backend support for handling product information and user inquiries, while integrating seamlessly with EmailJS and WhatsApp API for instant communication capabilities. This carefully selected combination of technologies ensures that critical fire safety information is always accessible while maintaining a professional, reliable platform for both Indian and Dubai markets."
  }
];

export default projects;