const fs = require('fs');

const streamContent = `BT
/F1 18 Tf
50 740 Td (SAURABH SINGH) Tj
/F1 10 Tf
0 -16 Td (Senior Backend Engineer | API Architecture | Distributed Caching | Scalable Systems) Tj
0 -14 Td (Vadodara, Gujarat, India | +91 83204 44237 | singhsaurabh0724@gmail.com | linkedin.com/in/saurabh-singh-backend) Tj

0 -25 Td (PROFESSIONAL SUMMARY) Tj
0 -14 Td (Senior Backend Engineer with 5+ years architecting, building, and scaling backend services and REST APIs for) Tj
0 -13 Td (production platforms serving 500+ daily active users. Full backend lifecycle: API design, MySQL/PostgreSQL schema,) Tj
0 -13 Td (Redis caching, event-driven pub/sub, JWT/OAuth 2.0/Sanctum auth, Docker containerization, Nginx, and AWS.) Tj
0 -13 Td (Cut average API response time 40% through indexing/caching, and reduced post-release defects 30% via PHPUnit & PHPStan.) Tj

0 -25 Td (TECHNICAL SKILLS) Tj
0 -14 Td (Backend Architecture: REST API Design, MVC Architecture, Microservices, Event-Driven Architecture, Load Balancing) Tj
0 -13 Td (Languages & Frameworks: PHP (Core & OOP, PHP 8.x), Laravel, CodeIgniter, Node.js/Express, Python (FastAPI)) Tj
0 -13 Td (Data & Caching: MySQL (Query Optimization, Indexing, Schema Design), PostgreSQL, Redis (Caching, Queues, Pub/Sub)) Tj
0 -13 Td (Security & Infra: JWT, OAuth 2.0, Sanctum, Webhooks, Docker, Nginx, AWS (EC2/S3/RDS), GitHub Actions CI/CD) Tj
0 -13 Td (Testing & Integrations: PHPUnit, PestPHP, PHPStan, Payment Gateways (Razorpay/PayU/Stripe), OpenAI/Claude API) Tj

0 -25 Td (PROFESSIONAL EXPERIENCE) Tj
/F1 11 Tf
0 -15 Td (Senior Backend Developer - Kode Creators Pvt. Ltd. (Dec 2025 - Present | Vadodara)) Tj
/F1 10 Tf
0 -14 Td (- Own backend service & API architecture for US-based client platforms with international stakeholders.) Tj
0 -13 Td (- Redesigned MySQL indexing & introduced Redis caching, cutting average API response time by 40%.) Tj
0 -13 Td (- Built secure API authentication (JWT, OAuth 2.0, Sanctum) and Redis pub/sub event-driven layer.) Tj
0 -13 Td (- Containerized services with Docker and configured Nginx load-balanced deployments on AWS (EC2, S3, RDS).) Tj
0 -13 Td (- Designed secure signature-verified payment integrations (Razorpay, PayU, Stripe) & production LLM (OpenAI/Claude).) Tj
0 -13 Td (- Cut post-release bug rate 30% by establishing PR workflows, coding standards, PHPUnit, & PHPStan static analysis.) Tj

/F1 11 Tf
0 -20 Td (Full Stack Developer - BIT Infotech (Feb 2024 - Nov 2025 | Vadodara)) Tj
/F1 10 Tf
0 -14 Td (- Architected and scaled LMS/CRM backend to 500+ daily active users using modular Laravel/CodeIgniter services.) Tj
0 -13 Td (- Designed versioned REST APIs consumed by frontend teams, reducing integration bugs across 2 teams.) Tj
0 -13 Td (- Contributed backend support for SEO/Core Web Vitals initiatives, growing organic traffic 35% within 3 months.) Tj

/F1 11 Tf
0 -20 Td (Website Developer - Dev Infotech (Jan 2021 - Dec 2023 | Vadodara)) Tj
/F1 10 Tf
0 -14 Td (- Built and deployed 20+ production PHP/MySQL backend systems end-to-end as sole developer.) Tj
0 -13 Td (- Integrated Razorpay/PayU payment APIs with secure transaction handling across client industries.) Tj

0 -25 Td (EDUCATION & ACHIEVEMENTS) Tj
0 -14 Td (- MCA (Master of Computer Applications) | Parul University, Vadodara (2022 - 2024)) Tj
0 -13 Td (- B.C.A (Bachelor of Computer Applications) | Sardar Patel University, Gujarat (2019 - 2022)) Tj
0 -13 Td (- 2nd Place, Parul University Tech Expo 2023 - Facial Recognition Attendance Tracker) Tj
0 -13 Td (- 100+ Hours of structured live technical instruction delivered in backend & API engineering) Tj
ET`;

const pdf = `%PDF-1.4
1 0 obj <</Type /Catalog /Pages 2 0 R>> endobj
2 0 obj <</Type /Pages /Count 1 /Kids [3 0 R]>> endobj
3 0 obj <</Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources <</Font <</F1 4 0 R>>>> /Contents 5 0 R>> endobj
4 0 obj <</Type /Font /Subtype /Type1 /BaseFont /Helvetica>> endobj
5 0 obj <</Length ${streamContent.length}>> stream
${streamContent}
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000062 00000 n 
0000000117 00000 n 
0000000244 00000 n 
0000000318 00000 n 
trailer <</Size 6 /Root 1 0 R>>
startxref
${400 + streamContent.length}
%%EOF`;

fs.writeFileSync('public/resume.pdf', pdf);
console.log('public/resume.pdf created successfully');
